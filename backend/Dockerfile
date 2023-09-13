# Use node version 18 as our base image
FROM node:18-alpine AS base
RUN npm i -g pnpm

# Create an intermediate image with installed dependencies
FROM base AS dependencies
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

# Create another intermediate image for building the app
FROM base AS build
WORKDIR /app

# Copy all files from current directory to the working directory in the docker image
COPY . .

# Copy node_modules from the "dependencies" stage to the current stage
COPY --from=dependencies /app/node_modules ./node_modules

# RUN pnpm build
RUN pnpm prune --prod

# Create the final docker image for deployment
FROM base AS deploy
WORKDIR /app

# Copy build output from the "build" stage to the current stage
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/node_modules ./node_modules

# The command that starts our app in the container.
CMD [ "node", "dist/main" ]
