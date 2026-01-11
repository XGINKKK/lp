# Stage 1: Build the React Application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app (produces /app/dist)
RUN npm run build

# Stage 2: Production Server
FROM node:20-alpine AS runner

WORKDIR /app

# Install only production dependencies for the server
RUN npm install express

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Copy the Node.js server file
COPY server.js .
COPY package.json .

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
