<VirtualHost *:80>
    ServerName example.com

    ProxyPass "/" "http://localhost:3000"
</VirtualHost>
