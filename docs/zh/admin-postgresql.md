# PostgreSQL

AWX 预装包中内置 PostgreSQL 及可视化数据库管理工具 `phpPgAdmin` ，使用请参考如下步骤：

1. 登录云控制台，[开启服务器安全组9090端口](https://support.websoft9.com/docs/faq/zh/tech-instance.html)
2. 本地浏览器 Chrome 或 Firefox 访问：*http://服务器公网IP:9090*，进入phpPgAdmin
  ![登录phpPgAdmin](https://libs.websoft9.com/Websoft9/DocsPicture/en/pgsql/pg02.png)
3. 输入数据库用户名和密码([不知道密码？](/zh/stack-accounts.md))
  ![登录phpPgAdmin](https://libs.websoft9.com/Websoft9/DocsPicture/en/pgsql/pg03.png)

> 阅读Websoft9提供的 [《PostgreSQL教程》](https://support.websoft9.com/docs/postgresql/zh/admin-phppgadmin.html) ，掌握更多的 PostgreSQL 实用技能：修改密码、导入/导出数据、创建用户、开启或关闭远程访问、日志配置等