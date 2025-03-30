#!/bin/bash

cd ~/efine/efine_source/my-website

pwd
npm -version
npm install
npm run build || exit 1
cd build 
docker cp ./ efine1:/tomcat/webapps/doc/ || exit 1
echo "Deployed!"
