# Use an official NGINX image as the base
FROM nginx:alpine

# Remove default NGINX html files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build output
COPY build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
