# SSL/HTTPS

网站完成域名绑定且可以通过HTTP访问之后，方可设置HTTPS。

AWX 预装 SSL 设置，但需要开启并上传证书。  

## 前置条件

1. 云控制台已经开启安全组443端口
2. 完成域名解析
3. 申请了可用的CA证书

## 配置方案

1. 修改（检查） /data/.awx/docker-compose.yml 文件，确保有如下两项 "- 443:443" 和 "- /data/cert:/etc/ssl/certs"：       
    ```
    ports:
    - "80:8052"
    - "443:443"
    hostname: awxweb
    user: root
    restart: unless-stopped
    volumes:
    - /data/cert:/etc/ssl/certs
    ```
2. 上传证书到 /data/cert 目录

3. 打开虚拟主机配置文件：*/data/.awx/nginx.conf* ，插入如下的 **HTTPS 配置项** 到 server{ } 段落中，保存
   ``` text
   #-----HTTPS template start------------
   listen 443 ssl; 
   ssl_certificate /etc/ssl/certs/xxx.crt;
   ssl_certificate_key /etc/ssl/certs/xxx.key;
   ssl_trusted_certificate /etc/ssl/certs/chain.pem;
   ssl_session_timeout 5m;
   ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
   ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
   ssl_prefer_server_ciphers on;
   #-----HTTPS template end------------
   ```
   > 以上的配置文件中的路径必须是 awx-web 容器虚拟机的路径：/etc/ssl/certs

4. 运行如下命令，重置容器
   ```
   cd /data/.awx
   sudo docker-compose up -d
   ```

## FAQ

#### 证书存放在哪里？

证书存放到持久化存储中，但配置文件中的路径必须是容器虚拟机的路径