FROM node:latest

# Create working dir
WORKDIR /app

# Copy dependency definitions
COPY . .

# Install dependecies
RUN yarn install

# Expose the port the app runs in
EXPOSE 3000/tcp

# Start the node server
CMD ["yarn", "start"]