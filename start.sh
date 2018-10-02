#!/bin/sh

cd server
nodemon server.js &
cd ../client 
yarn start &

wait
echo "Server and Client Running"

