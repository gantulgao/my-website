#!/bin/bash

cd ~/efine/efine_source/my-website

pwd

npm -version

npm run build || exit 1

cd build 

docker cp ./ efine:/tomcat/webapps/ROOT/ || exit 1

echo "Done"