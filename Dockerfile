FROM node:20 as builder-front

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy project folder
COPY front /app

# Build Angular project
RUN pnpm i && pnpm run build

FROM node:20 as builder-back

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy project folder
COPY back /app

# Build back project
RUN pnpm i && pnpm run build

FROM node:20

RUN apt-get update && apt-get install -y supervisor nginx
RUN mkdir -p /var/log/supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy projects
COPY --from=builder-front /app/dist/tp2/browser/ /var/www/html
# COPY --from=builder-back /app/dist /app/back

# Set working directory
WORKDIR /app/back
# Install dependencies
#RUN npm install --production

# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start supervisor
CMD ["/usr/bin/supervisord"]