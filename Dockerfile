# Use Nginx as base image
FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy your website files to nginx html folder
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

