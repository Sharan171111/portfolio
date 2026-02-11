# Portfolio Deployment Script
# Run this after creating your GitHub repository

Write-Host "🚀 Portfolio Deployment Helper" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "✓ Git remote already configured" -ForegroundColor Green
    Write-Host "  Remote URL: $remoteExists" -ForegroundColor Gray
} else {
    Write-Host "📝 Please create a GitHub repository first:" -ForegroundColor Yellow
    Write-Host "   1. Go to: https://github.com/new" -ForegroundColor White
    Write-Host "   2. Repository name: portfolio" -ForegroundColor White
    Write-Host "   3. Keep it Public" -ForegroundColor White
    Write-Host "   4. Don't initialize with README" -ForegroundColor White
    Write-Host "   5. Click 'Create repository'" -ForegroundColor White
    Write-Host ""
    
    $repoUrl = Read-Host "Enter your repository URL (e.g., https://github.com/Sharan171111/portfolio.git)"
    
    if ($repoUrl) {
        git remote add origin $repoUrl
        Write-Host "✓ Remote added successfully" -ForegroundColor Green
    } else {
        Write-Host "✗ No URL provided. Exiting..." -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Cyan

# Rename branch to main if needed
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    git branch -M main
    Write-Host "✓ Branch renamed to 'main'" -ForegroundColor Green
}

# Push to GitHub
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Next Steps - Deploy to Vercel:" -ForegroundColor Cyan
    Write-Host "   1. Go to: https://vercel.com/new" -ForegroundColor White
    Write-Host "   2. Sign in with GitHub" -ForegroundColor White
    Write-Host "   3. Import your 'portfolio' repository" -ForegroundColor White
    Write-Host "   4. Click 'Deploy' (no configuration needed!)" -ForegroundColor White
    Write-Host "   5. Your site will be live in ~1 minute! 🎉" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 Full deployment guide: DEPLOYMENT.md" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "✗ Push failed. Please check your credentials and try again." -ForegroundColor Red
    Write-Host "  You may need to authenticate with GitHub first." -ForegroundColor Yellow
}
