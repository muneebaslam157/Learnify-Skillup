# Simple Dockerfile for Node.js app
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
