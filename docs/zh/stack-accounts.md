# 账号密码

使用AWX，可能会用到的几组账号密码如下：

## AWX

管理员用户名：`admin`  
管理员密码： `password` or `admin` 

## PostgreSQL

* 管理员账号：*`postgres`*
* 管理员密码：存储在您的服务器指定文件中：*/credentials/password.txt*。建议通过云控制台直接连接服务器，进入命令终端，运行`cat /credentials/password.txt` 命令获取数据库密码：
   ![运行cat命令](https://libs.websoft9.com/Websoft9/DocsPicture/zh/common/catdbpasswordps-websoft9.png)

> 需要登录PostgreSQL，请参考 [PostgreSQL可视化管理](/zh/admin-postgresql.md)

## Linux

* 主机地址：服务公网IP地址
* 连接方式：云控制台在线SSH 或 SFTP客户端工具 或 SSH客户端工具
* 管理员密码：创建服务器的时候自行设置，若不记得密码需要通过云控制台重置。
* 管理员账号：不同的云平台有一定的差异
   |  云平台   |  管理员账号   |
   | --- | --- |
   |  Azure   |  创建服务器的时候自行设置   |
   |  Ubuntu of AWS   |  ubuntu   |
   |  CentOS of AWS   |  centos   |
   |  阿里云，华为云，腾讯云   |  root   |