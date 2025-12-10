# Dockerfile for Learnify - Skill Up (Vite + React)
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose Vite dev port
EXPOSE 5173

# Run Vite dev server in container, accessible from outside
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
