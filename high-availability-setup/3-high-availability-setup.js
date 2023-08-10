// Configure Nginx to load balance requests to multiple servers

upstream app_servers {
  server 127.0.0.1:3000;
  server 127.0.0.1:3001;
  server 127.0.0.1:3002;
}

server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://app_servers;
  }
}
