# Step 1: Use Node to build
FROM node:18 AS build-stage

WORKDIR /app

# Copy only package.json + package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy all other files (src, public etc.)
COPY . .

# Build Vue app
RUN npm run build

# Step 2: Use nginx to serve
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]