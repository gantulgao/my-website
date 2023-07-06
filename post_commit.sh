#!/bin/bash

cd ~/efine/efine_source/my-website

pwd

npm -version

npm run serve -- --build --port 80 --host 0.0.0.0 || exit 1

cd build 

docker cp ./ efine:/tomcat/webapps/ROOT/ || exit 1

echo "Done"