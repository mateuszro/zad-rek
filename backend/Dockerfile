FROM node:lts-alpine

# WORKDIR /usr/src/app
WORKDIR /backend

COPY package*.json ./ 
RUN npm install
COPY . . 
#RUN npm run seed
EXPOSE 5000 


CMD ./node_modules/.bin/nodemon src/server.js
