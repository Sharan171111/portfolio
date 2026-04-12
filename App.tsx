import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { Analytics } from '@vercel/analytics/react';
import PortfolioApp from './PortfolioApp';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const requestRef = useRef<number>();
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  
  const [isTracking, setIsTracking] = useState(true);
  const isTrackingRef = useRef(true);

  const toggleTracking = () => {
    const newState = !isTracking;
    setIsTracking(newState);
    isTrackingRef.current = newState;
  };
  
  // Track previous Y position and a smoothed Y position
  const lastYRef = useRef<number | null>(null);
  const velocityRef = useRef<number>(0);

  useEffect(() => {
    let handLandmarker: HandLandmarker | null = null;
    let lastVideoTime = -1;

    const initVision = async () => {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
        );
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
            delegate: "GPU"
          },
          runningMode: "VIDEO",
          numHands: 1
        });
        setIsModelLoaded(true);
      } catch (e) {
        console.error("Failed to load MediaPipe model:", e);
      }
    };

    initVision();

    const startCamera = async () => {
      if (!videoRef.current) return;
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: "user", width: 640, height: 480 } 
        });
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener("loadeddata", () => {
          videoRef.current!.play();
          predictWebcam();
        });
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    const predictWebcam = async () => {
      if (!videoRef.current || !handLandmarker) return;
      
      let startTimeMs = performance.now();
      
      if (videoRef.current.currentTime !== lastVideoTime) {
        lastVideoTime = videoRef.current.currentTime;
        const results = handLandmarker.detectForVideo(videoRef.current, startTimeMs);
        
        if (!isTrackingRef.current) {
          // Bypass running the heavy ML model if tracking is toggled off
          requestRef.current = window.requestAnimationFrame(predictWebcam);
          return;
        }

        if (results.landmarks && results.landmarks.length > 0) {
          const landmarks = results.landmarks[0];
          const indexFinger = landmarks[8];
          
          // Check if fingers are extended (open) vs curled (fist)
          // Y-axis is 0 at the top of the monitor and 1 at the bottom.
          // If the Tip joint (e.g., 8) is higher up than the PIP knuckle (e.g., 6) then it is EXTENDED.
          const isIndexOpen = landmarks[8].y < landmarks[6].y;
          const isMiddleOpen = landmarks[12].y < landmarks[10].y;
          const isRingOpen = landmarks[16].y < landmarks[14].y;
          const isPinkyOpen = landmarks[20].y < landmarks[18].y;

          // If at least 3 fingers are fully extended upwards, the hand is "OPEN"
          const openFingersCount = [isIndexOpen, isMiddleOpen, isRingOpen, isPinkyOpen].filter(Boolean).length;
          const isOpenHand = openFingersCount >= 3;

          if (isOpenHand) { 
             // Auto-scroll DOWN continuously at a HIGHLY accelerated speed
             window.scrollBy({ top: 80, behavior: 'auto' });
          } else {
             // Closed hand (fist) -> STOP scrolling immediately
             // (No scroll actions fired)
          }
        } else {
          lastYRef.current = null;
          velocityRef.current *= 0.5;
        }
      }
      
      requestRef.current = window.requestAnimationFrame(predictWebcam);
    };

    startCamera();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (handLandmarker) handLandmarker.close();
    };
  }, []);

  return (
    <>
      <video ref={videoRef} className="hidden" playsInline muted />
      
      {!isModelLoaded && (
        <div className="fixed bottom-4 left-4 z-[9999] bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 font-mono text-xs">
           <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
           VISION INITIATING...
        </div>
      )}
      {isModelLoaded && (
        <div className="fixed bottom-4 left-4 z-[9999] flex flex-col gap-3">
          {/* Tracking toggle switch */}
          <button 
            onClick={toggleTracking}
            className={`w-fit px-4 py-2 rounded-full font-bold text-xs tracking-wider transition-all duration-300 shadow-xl border ${
              isTracking 
                ? 'bg-purple-600/90 text-white border-purple-400/50 hover:bg-purple-500' 
                : 'bg-slate-800/90 text-slate-400 border-slate-700/50 hover:bg-slate-700'
            }`}
          >
            {isTracking ? '🟢 TRACKING ACTIVE' : '⏸️ TRACKING PAUSED'}
          </button>

          {/* Hint UI */}
          {isTracking && (
            <div className="bg-black/40 text-white/90 px-4 py-2 rounded-full font-mono text-xs backdrop-blur-md shadow-lg border border-white/10">
               🤚 OPEN HAND = SCROLL &nbsp;&nbsp;|&nbsp;&nbsp; ✊ FIST = STOP
            </div>
          )}
        </div>
      )}

      {/* Render existing portfolio exactly as it was! */}
      <PortfolioApp />

      {/* Onboarding Welcome Screen */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 font-sans"
          >
            <motion.div 
              initial={{ y: 20, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              
              <h2 className="text-3xl font-black text-white mb-4 tracking-tighter">
                ANTIGRAVITY <span className="text-purple-500">READY</span>
              </h2>
              
              <div className="space-y-6 text-slate-300">
                 <p className="text-sm leading-relaxed">
                   This portfolio is equipped with an advanced AI gesture tracking engine. You can browse completely hands-free!
                 </p>
                 
                 <div className="space-y-4 bg-slate-950 rounded-2xl p-5 border border-slate-800/50">
                    <div className="flex items-center gap-4">
                       <div className="text-4xl">🤚</div>
                       <div>
                         <div className="font-bold text-white tracking-wide text-sm">OPEN HAND</div>
                         <div className="text-xs text-slate-400">Hold open to warp-scroll downwards.</div>
                       </div>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div className="flex items-center gap-4">
                       <div className="text-4xl">✊</div>
                       <div>
                         <div className="font-bold text-white tracking-wide text-sm">CLOSED FIST</div>
                         <div className="text-xs text-slate-400">Make a fist to break & stop scrolling.</div>
                       </div>
                    </div>
                 </div>

                 <p className="text-xs font-mono text-slate-500">
                   * Please grant camera permissions when prompted. Your video feed is processed 100% locally on your specific device.
                 </p>
              </div>

              <div className="mt-8 space-y-3">
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="w-full py-4 rounded-xl font-bold tracking-widest text-sm text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  INITIALIZE SYSTEM
                </button>
                <button 
                  onClick={() => {
                    setShowWelcome(false);
                    if (isTracking) toggleTracking();
                  }}
                  className="w-full py-4 rounded-xl font-bold tracking-widest text-sm text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/80 transition-colors border border-slate-700"
                >
                  DISABLE GESTURES (STANDARD MOUSE)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vercel Web Analytics */}
      <Analytics />
    </>
  );
}
