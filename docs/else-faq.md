# FAQ

#### AWX support multi-language?

No, only English

#### How is AWX connected to PostgreSQL?

容器内部连接，即容器编排

#### AWX API 地址是多少？

http://AWX Server Internet IP/api/

#### If there is no domain name, can I deploy AWX?

Yes, visit AWX by *http://Internet IP*

#### What is the password for the database postgres user?

The password is stored in the server related file: `/credentials/password.txt`

#### Is there a web-base GUI database management tools?

No

#### Is it possible to modify the source path of AWX?

采用 Docker 安装，不可以修改

#### What's the difference between Deployment and Installation?

- Deployment is a process of installing and configuring a sequence of software in sequence in a different order, which is a complex system engineering.  
- Installation is the process of starting the initial wizard after the application is prepared.  
- Installation is simpler than deployment. 

#### What's Cloud Platform?

Cloud platform refers to platform manufacturers that provide cloud computing services, such as: **Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud**, etc.

#### What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?

No difference, just the terminology used by different manufacturers, actually cloud servers