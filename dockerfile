# Use an official Node.js image as the base
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the tsconfig.json file
COPY tsconfig.json .

# Install dependencies
RUN npm install

# Copy the source code
COPY src/ src/

# Compile the TypeScript code
RUN npx tsc

# Output the compiled code to the dist folder
RUN mkdir -p dist && cp -r src/* dist/

# Set the default command to run the compiled code
CMD ["node", "dist/index.js"]