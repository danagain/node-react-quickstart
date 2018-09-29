FROM node:latest

# Create working dir
WORKDIR /app

# Copy dependency definitions
COPY . .

# Install dependecies
RUN npm install

# Expose the port the app runs in
EXPOSE 5000/tcp

# Start the node server
CMD ["node", "server.js"]