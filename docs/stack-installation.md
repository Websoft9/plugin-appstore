# Initial Installation

If you have completed the AWX deployment on Cloud Platform, the following steps is for you to start use it quikly

## Preparation

1. Get the **Internet IP** on your Cloud Platform
2. Check you **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)** of Cloud Console to ensure the TCP:80 is allowed
3. Make a domain resolution on your DNS Console if you want to use domain for AWX

## AWX Installation Wizard

1. Using local Chrome or Firefox to visit the URL *http://domain name* or *http://Internet IP*, you will log in interface of AWX
   ![AWX登录页面](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awx-login-websoft9.png)

2. 输入用户名和密码[（查看）](/zh/stack-accounts.md)，登录到AWX后台管理界面
   ![AWX后台界面](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awxui-websoft9.png)

3. 分别创建运行一个安装模板（Template）所需的准备条件：

   - ORGANIZATIONS
   - Credentials
   - Inventories
   - Project

   最后创建 Template 关联它们，就完成了一个自动化项目的配置

   ![AWX后台界面](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awx-template-websoft9.png)


4. 启动Template，进入 Job 页面，开始安装所需的应用程序
   ![AWX后台界面](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awx-job-websoft9.png)

> More useful AWX guide, please refer to [Ansible Tower Documentation](https://docs.ansible.com/ansible-tower/)

## Q&A 

#### I can't visit the start page of AWX?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this AWX use?

PostgreSQL on Docker