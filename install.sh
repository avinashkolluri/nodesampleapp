#!/bin/bash -xe
echo "Setting up NodeJS Environment"
sudo yum update -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
sudo yum install git -y
git clone https://github.com/avinashkolluri/nodesampleapp.git
cd nodesampleapp
npm install
npm install pm2 -g
pm2 start index.js