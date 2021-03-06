FROM node:15.7.0-alpine
RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .
RUN npm install
# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
EXPOSE 80
CMD [ "node", "index.js"]