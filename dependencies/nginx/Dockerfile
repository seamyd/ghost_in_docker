FROM nginx
COPY blogaboutit.conf /etc/nginx/sites-available/blogaboutit.conf
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/sites-enabled && \
    ln -s /etc/nginx/sites-available/blogaboutit.conf /etc/nginx/sites-enabled/blogaboutit.conf && \
    rm -f /etc/nginx/sites-enabled/default

EXPOSE 80
CMD ["nginx", "-c", "nginx.conf", "-g", "daemon off;"]
