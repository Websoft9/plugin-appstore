# Parameters

The AWX deployment package contains a sequence software (referred to as "components") required for AWX to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.

## Path

### Docker Container

通过运行`docker ps`，可以查看到AWX运行时所有的Container：

```bash
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                NAMES
e240ed8209cd        awx_task:1.0.0.8    "/tini -- /bin/sh ..."   2 minutes ago       Up About a minute   8052/tcp                             awx_task
1cfd02601690        awx_web:1.0.0.8     "/tini -- /bin/sh ..."   2 minutes ago       Up About a minute   0.0.0.0:443->8052/tcp                 awx_web
55a552142bcd        memcached:alpine    "docker-entrypoint..."   2 minutes ago       Up 2 minutes        11211/tcp                            memcached
84011c072aad        rabbitmq:3          "docker-entrypoint..."   2 minutes ago       Up 2 minutes        4369/tcp, 5671-5672/tcp, 25672/tcp   rabbitmq
97e196120ab3        postgres:9.6        "docker-entrypoint..."   2 minutes ago       Up 2 minutes        5432/tcp                             postgres
```

### Docker Volume

使用 *sudo docker volume ls* 查询所有 volumes，其中：

awx_postgres 挂载的目录：*/var/lib/postgresql/data*  
awx_rabbitmq 挂载的目录：*/var/lib/rabbitmq*  
awx_web 挂载的目录：*/var/lib/nginx*   
awx_task 挂载的目录：*/var/lib/nginx* 	


### Docker

Docker 根目录: */var/lib/docker*  
Docker 镜像目录: */var/lib/docker/image*   
Docker 存储卷：*/var/lib/docker/volumes*  
Docker daemon.json 文件：默认没有创建，请到 */etc/docker* 目录下根据需要自行创建

### Docker Compose

本环境使用 Docker Compose 作为容器编排（调度）工具，用于管理多个容器的启动和服务连接。

Docker Compose 命令位置：*/usr/local/bin/docker-compose*  
Docker Compose 配置目录 */data/awx/awxcompose*  

### PostgreSQL

PostgreSQL 数据持久存储：*/data/pgdocker*

## Ports

These Ports is need when use AWX, refer to [Safe Group Setting on Cloud Console](https://support.websoft9.com/docs/faq/tech-instance.html)

| Name | Number | Use |  Necessity |
| --- | --- | --- | --- |
| PostgreSQL | 5432 | Remote connect PostgreSQL | Optional |
| HTTP | 80 | HTTP requests for AWX | Required |
| HTTPS | 443 | HTTPS requests AWX | Optional |

## Version

You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:

```shell
# Linux Version
lsb_release -a

# Python Version
python --version

# Docker Version
docker -v

# Docker image lists(includes version)
sudo docker images

# Docker Compose Version
docker-compose --version
```