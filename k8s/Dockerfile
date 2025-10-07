# Use an official NGINX image as the base
FROM nginx:alpine

# Remove the default NGINX website
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from React to NGINX's public folder
COPY build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
