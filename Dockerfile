# Use Alpine Linux as base image
FROM alpine:latest

# Set working directory
WORKDIR /app

# Install necessary packages for installing Node.js and Python
RUN apk add --update --no-cache \
    curl \
    gnupg \
    python3 \
    py3-pip

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_$(apk info nodejs --query-format "%v") | ash
RUN apk add --update --no-cache nodejs

# Clean up
RUN rm -rf /var/cache/apk/*

# Display installed versions of Node.js and Python
RUN node --version
RUN python3 --version

COPY package.json .
COPY package-lock.json .
COPY .env .
COPY index.js .
COPY .gitignore .
COPY src ./src

RUN npm i --omit-dev

ENTRYPOINT [ "npm", "run", "start_production" ]