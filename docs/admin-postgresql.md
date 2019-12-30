# PostgreSQL 

AWX deployment package includes PostgreSQL and Web-GUI tool phpPgAdmin for PostgreSQL management, refer to these steps to use it:

1. 使用 SSH 登录服务器后，运行`docker ps`命令获取 awx-postresql 容器ID
  ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awx-getcontainerid-websoft9.png)

2. 进入 awx-postgresql 容器

   ```
   docker exec -it true 2ca9ad211678 /bin/bash
   ```
4. 运行上面的命令后，就进入了容器命令操作界面

5. 接下来可以使用命令操作 PostgreSQL 

> Websoft9 provide *[PostgreSQL guide](https://support.websoft9.com/docs/postgresql/admin-phppgadmin.html)* for more useful skills of PostgreSQL, includes: modify password, create user, import/export data, enable or disable remote visit, log configuation and so on.