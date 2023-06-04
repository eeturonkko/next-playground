# Specify the base image
FROM node:16.15.1

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Generate prisma client
RUN npx prisma generate

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 5000

# Specify the command to run
CMD [ "node", "dist/index.js" ]
