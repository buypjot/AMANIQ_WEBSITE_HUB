# Use Node.js official lightweight image
FROM node:20-alpine

# Set working directory inside containers
WORKDIR /app

# Copy package definition files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose container port 9016
EXPOSE 9016

# Start Vite dev server binding to 0.0.0.0:9016
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "9016"]
