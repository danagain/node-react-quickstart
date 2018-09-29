#!/bin/sh

cd client
yarn install
cd ..
echo "Installed Client Dependencies"
cd server
npm install
echo "Installed Server Dependencies"
cd ..
