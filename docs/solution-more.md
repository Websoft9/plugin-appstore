# More

Each of the following solutions has been proven to be effective and We hope to be helpful to you.

## Domain binding

The precondition for binding a domain is that AWX can accessed by domain name.

Nonetheless, from the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

AWX domain name binding steps:

1. Use **SFTP** to connect your Cloud Server
2. Modify [Nginx configuration file](/stack-components.md#nginx), change the **server_name**'s value *localhost* to your domain name
   ```text
   ...
      server_name    localhost; # Change to a your domain name
   ...
   ```
3. Save it and restart [Nginx Service](/admin-services.md#nginx)
   ```
   sudo docker restart nginx
   ```

## 负载均衡

通过负载均衡处理多台 AWX 并行工作，对于大型企业来说这是一种很常见的部署方案。

AWX是基于Docker部署，处理web的容器名称为：awx_web

## 使用外部PostgreSQL

默认安装下，使用的是Docker版本的PostgreSQL数据库，并设置了持久化存储。  

如果你想将数据库更换为外部PostgreSQL数据库（自建或云数据库），请参考如下步骤：

1. 备份好已有的AWX数据
2. 进入到AWX的配置文件夹
   ```
   cd /data/.awx
   ```
2. 删除目前AWX项目的所有容器
   ```
   cd /data/.awx
   docker-compose -f docker-compose.yml down -v
   ```
3. 修改 *docker-compose.yml* 文件，去掉两处 *depends_on:* 项中的 *- postgres*，并删除 *postgres: ...* 整段，最后文件的内容如下： 
   ```
   version: '2'
   services:

     web:
       image: ansible/awx_web:11.2.0
       container_name: awx_web
       depends_on:
         - redis
         - memcached
       ports:
         - "80:8052"
       hostname: awxweb
       user: root
       restart: unless-stopped
       volumes:
         - supervisor-socket:/var/run/supervisor
         - rsyslog-socket:/var/run/awx-rsyslog/
         - rsyslog-config:/var/lib/awx/rsyslog/
         - "/data/.awx/SECRET_KEY:/etc/tower/SECRET_KEY"
         - "/data/.awx/environment.sh:/etc/tower/conf.d/environment.sh"
         - "/data/.awx/credentials.py:/etc/tower/conf.d/credentials.py"
         - "/data/.awx/nginx.conf:/etc/nginx/nginx.conf:ro"
         - "/data/.awx/redis_socket:/var/run/redis/:rw"
         - "/data/.awx/memcached_socket:/var/run/memcached/:rw"
       environment:
         http_proxy: 
         https_proxy: 
         no_proxy: 

     task:
       image: ansible/awx_task:11.2.0
       container_name: awx_task
       depends_on:
         - redis
         - memcached
         - web
       hostname: awx
       user: root
       restart: unless-stopped
       volumes:
         - supervisor-socket:/var/run/supervisor
         - rsyslog-socket:/var/run/awx-rsyslog/
         - rsyslog-config:/var/lib/awx/rsyslog/
         - "/data/.awx/SECRET_KEY:/etc/tower/SECRET_KEY"
         - "/data/.awx/environment.sh:/etc/tower/conf.d/environment.sh"
         - "/data/.awx/credentials.py:/etc/tower/conf.d/credentials.py"
         - "/data/.awx/redis_socket:/var/run/redis/:rw"
         - "/data/.awx/memcached_socket:/var/run/memcached/:rw"
       environment:
         http_proxy: 
         https_proxy: 
         no_proxy: 
         SUPERVISOR_WEB_CONFIG_PATH: '/supervisor.conf'

     redis:
       image: redis
       container_name: awx_redis
       restart: unless-stopped
       environment:
         http_proxy: 
         https_proxy: 
         no_proxy: 
       command: ["/usr/local/etc/redis/redis.conf"]
       volumes:
         - "/data/.awx/redis.conf:/usr/local/etc/redis/redis.conf:ro"
         - "/data/.awx/redis_socket:/var/run/redis/:rw"
         - "/data/.awx/memcached_socket:/var/run/memcached/:rw"

     memcached:
       image: "memcached:alpine"
       container_name: awx_memcached
       command: ["-s", "/var/run/memcached/memcached.sock", "-a", "0666"]
       restart: unless-stopped
       environment:
         http_proxy: 
         https_proxy: 
         no_proxy: 
       volumes:
         - "/data/.awx/memcached_socket:/var/run/memcached/:rw"

   volumes:
     supervisor-socket:
     rsyslog-socket:
     rsyslog-config:

   ```
4. 修改 */data/.awx/credentials.py* 文件中数据库账号信息，确保为外部PostgreSQL的连接信息
   ```
      DATABASES = {
       'default': {
           'ATOMIC_REQUESTS': True,
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': "awx",
           'USER': "awx",
           'PASSWORD': "yourpassword",
           'HOST': "pgm-j6cr72qyfadij3980o.pg.rds.websoft9.com",
           'PORT': "1433",
       }
   }

   BROADCAST_WEBSOCKET_SECRET = "al9mLS4tWTlmX1owN1FyOElJWDY="
   ```
5. 修改 */data/.awx/environment.sh* 文件中数据库账号信息，确保为外部PostgreSQL的连接信息
   ```
   DATABASE_USER=awx
   DATABASE_NAME=awx
   DATABASE_HOST=pgm-j6cr72qyfadij3980o.pg.rds.websoft9.com
   DATABASE_PORT=1433
   DATABASE_PASSWORD=yourpassword
   AWX_ADMIN_USER=admin
   AWX_ADMIN_PASSWORD=password

   ```
6. 重新创建容器
   ```
   docker-compose -f docker-compose.yml up -d
   ```