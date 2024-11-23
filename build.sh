#!/bin/sh
set -e

cd ../
mkdir output
cp -R ./santa-web/* ./output
cp -R ./output ./santa-web/

cd santa-web || exit 1

npm install
npm run build
