import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import PortfolioApp from './PortfolioApp';

export default function App() {
  return (
    <>
      <PortfolioApp />
      <Analytics />
    </>
  );
}
