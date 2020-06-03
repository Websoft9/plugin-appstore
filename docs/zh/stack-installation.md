# 初始化安装

在云服务器上部署 AWX 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 AWX，请先到 **域名控制台** 完成一个域名解析

## AWX 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名* 或 *http://公网IP*, 进入AWX登录页面
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/awx/awx-upgrading-websoft9.png)

2. 等待升级完成后，进入登录界面
   ![AWX登录页面](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awx-login-websoft9.png)

3. 输入用户名和密码[（查看）](/zh/stack-accounts.md)，登录到AWX后台管理界面
   ![AWX后台界面](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awxui-websoft9.png)

4. 分别创建运行一个安装模板（Template）所需的准备条件：

   - ORGANIZATIONS
   - Credentials
   - Inventories
   - Project

   最后创建 Template 关联它们，就完成了一个自动化项目的配置

   ![AWX后台界面](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awx-template-websoft9.png)


6. 启动Template，进入 Job 页面，开始安装所需的应用程序
   ![AWX后台界面](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awx-job-websoft9.png)

> 需要了解更多AWX的使用，请参考：[Ansible Tower Documentation](https://docs.ansible.com/ansible-tower/)

## 常见问题

#### 浏览器打开IP地址，无法访问 AWX（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 本部署包采用的哪个数据库来存储 AWX 数据？

PostgreSQL Docker
