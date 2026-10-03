#!/bin/bash
# Rebuild the page bundles after editing anything in assets/js (needs Node.js: https://nodejs.org)
cd "$(dirname "$0")/../.." || exit 1
for p in home work series raw about corridor; do
  npx --yes esbuild@0.25 "assets/js/pages/$p.js" --bundle --format=iife --minify --target=es2019 --outfile="assets/js/build/$p.js" || exit 1
done
npx --yes esbuild@0.25 "assets/js/viewfinder/standalone.js" --bundle --format=iife --minify --target=es2019 --outfile="assets/js/build/beneath.js" || exit 1
echo "Built assets/js/build/*.js"
