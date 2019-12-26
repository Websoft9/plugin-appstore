# PostgreSQL

AWX deployment package includes PostgreSQL and Web-GUI tool phpPgAdmin for PostgreSQL management, refer to these steps to use it:

1. Log in Cloud Console, make sure the **TCP:9090** port is allowed on **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)**
2. Using the Chrome or FireFox to visit URL *http://Internet IP:9090*
  ![log in phpPgAdmin](https://libs.websoft9.com/Websoft9/DocsPicture/en/pgsql/pg02.png)
3. Enter username and password of PostgreSQL([Don't known password?](/stack-accounts.md))
  ![phpPgAdmin](https://libs.websoft9.com/Websoft9/DocsPicture/en/pgsql/pg03.png)

> Websoft9 provide *[PostgreSQL guide](https://support.websoft9.com/docs/postgresql/admin-phppgadmin.html)* for more useful skills of PostgreSQL, includes: modify password, create user, import/export data, enable or disable remote visit, log configuation and so on.