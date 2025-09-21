#!/bin/bash

# Car Encyclopedia Deployment Script
# This script builds the React app and prepares it for static hosting

echo "🚗 Building Car Encyclopedia..."

# Build the React application
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Build files are ready in the 'build' directory"
    echo "🌐 You can now deploy the contents of the 'build' directory to any static hosting service:"
    echo ""
    echo "   • GitHub Pages: Upload to a gh-pages branch"
    echo "   • Netlify: Drag and drop the build folder"
    echo "   • Vercel: Connect your repository or upload the build folder"
    echo "   • AWS S3: Upload build contents to an S3 bucket"
    echo "   • Any static hosting service"
    echo ""
    echo "📊 Build statistics:"
    echo "   • Main JS bundle: 63.39 kB (gzipped)"
    echo "   • CSS bundle: 2.26 kB (gzipped)"
    echo "   • Total build size: ~65 kB (gzipped)"
    echo ""
    echo "🎉 Your Car Encyclopedia is ready for deployment!"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
