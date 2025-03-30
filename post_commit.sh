#!/bin/bash

cd ~/efine/efine_source/my-website

pwd
npm -version
npm install
npm run build || exit 1
cd build 
cp -r ./ /var/www/html/doc.fincore.mn/ || exit 1
echo "Deployed!"
