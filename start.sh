#!/bin/sh

cd server
npm run server &
cd ../client
yarn start &

wait
echo "Server and Client Running"

