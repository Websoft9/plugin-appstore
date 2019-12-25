# 参数

## 组件及路径

Metabase部署包中不仅仅只有Metabase本身，还包含一序列支持Metabase运行所需的其他软件（这里称之为组件），下面列出主要组件名称、安装路径、配置文件地址等重要的信息：

### Metabase

Metabase安装目录: /data/wwwroot/metabase  
Metabase配置文件: /data/wwwroot/metabase/ccc.ii

> Metabase配置文件中包含数据库连接信息，更改了MySQL数据库账号密码，此处也需要对应修改

### Java
安装路径
配置路径
日志路径

### Tomcat
Apache Vhost Configuration File: _/etc/httpd/conf.d/vhost.conf_  
Apache Configuration directory: _/etc/httpd/conf.d_  
Apache Log Files: _/var/log/httpd_


### Nginx
Apache Vhost Configuration File: _/etc/httpd/conf.d/vhost.conf_  
Apache Configuration directory: _/etc/httpd/conf.d_  
Apache Log Files: _/var/log/httpd_

### MYSQL
Database install directory: /usr/local/mysql  
Database data directory: /data/mysql  
Database Configuration File: /etc/my.cnf  
MySQL Management URL: _http://Internet IP/phpmyadmin_

### Redis
Redis configuration file: _/etc/redis.conf_  
Redis data directory: _/var/lib/redis_

## 端口号

下面是您在使用本镜像过程中，需要用到的端口号，请通过云控制台安全组进行设置

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| MySQL | 3306 | 远程连接MySQL | 可选 |
| HTTP | 80 | 通过http访问Metabase | 必须 |
| HTTPS | 443 | 通过https访问Metabase | 可选 |
| phpMyAdmin on Docker | 9090 | 可视化管理MySQL | 可选 |

## 版本号

组件对应的基本版本号可以通过云市场商品页面查看，但部署到您的服务器之后，版本会有一定的升级，故更为精准的版本请通过在服务器上运行命令查看：

```shell
# Tomcat version

# Nginx version

# MySQL version

# Java Version
```