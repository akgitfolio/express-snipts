server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
    }
}
