FROM nginx:alpine

# Copy built site
COPY dist/ /usr/share/nginx/html/

# Custom nginx config for SPA-like routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
