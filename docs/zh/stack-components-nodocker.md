# 参数

AWX 预装包包含 AWX 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。

## 路径

### AWX

AWX 安装目录：*/opt/awx*  
AWX 配置文件: */etc/awx/settings.py*  
Ansible Python 依赖包: */opt/awx/embedded/lib/python2.7/site-packages*

```python
# 配置文件中的重要参数
TATIC_ROOT = '/opt/awx/static'
PROJECTS_ROOT = '/var/lib/awx/projects'
JOBOUTPUT_ROOT = '/var/lib/awx/job_status'
```

### Nginx

Nginx 虚拟主机配置文件：*/etc/nginx/conf.d/default.conf*  
Nginx 主配置文件： */etc/nginx/nginx.conf*  
Nginx 日志文件： */var/log/nginx/*  
Nginx 连接 uWSGI 配置文件： */etc/nginx/uwsgi_params*  

### uWSGI

uWSGI 安装路径：*/opt/awx/bin/uwsgi*  

### Python

Python 安装目录：*/usr/lib/python2.7* 和 */usr/lib/python*  
Python 虚拟机目录：*/usr/bin/python2.7*  和 */usr/bin/python*  

### Ansible

Ansible 安装目录： */opt/awx/embedded/lib/python2.7/site-packages/ansible-2.7.4.dist-info*

### RabbitMQ

RabbitMQ 安装和配置目录：*/usr/lib/rabbitmq*  
RabbitMQ 日志文件： */var/log/rabbitmq*

### PostgreSQL

PostgreSQL 安装路径: */usr/pgsql-v*  # v是版本号  
PostgreSQL 数据文件 */data/pgsql/base*  
PostgreSQL 配置文件: */data/pgsql/postgresql.conf*    
PostgreSQL 日志文件：*/data/pgsql/pg_log*  
PostgreSQL 可视化管理地址: *http://服务器公网IP:9090*，用户名和密码请见 [账号密码](/zh/stack-accounts.md) 章节。


## 端口号

下面是您在使用本镜像过程中，需要用到的端口号，请通过 [云控制台安全组](https://support.websoft9.com/docs/faq/zh/tech-instance.html)进行设置

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| PostgreSQL | 5432 | 远程连接PostgreSQL | 可选 |
| HTTP | 80 | 通过http访问AWX | 必须 |
| HTTPS | 443 | 通过https访问AWX | 可选 |
| phpPgAdmin on Docker | 9090 | 可视化管理PostgreSQL | 可选 |

## 版本号

组件版本号可以通过云市场商品页面查看。但部署到您的服务器之后，组件会自动进行更新导致版本号有一定的变化，故精准的版本号请通过在服务器上运行命令查看：

```shell
# Python Version
python --version

# Nginx version:
nginx -v

# PostgreSQL version:
psql --version

# Dokcer:
docker --version

```