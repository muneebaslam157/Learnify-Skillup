FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm install vite -g
COPY . .
RUN chmod +x node_modules/.bin/vite
RUN npm run build
EXPOSE 8080
CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "8080"]
