# AWX 自动化安装与部署

本项目是由 [Websoft9](http://www.websoft9.com) 研发的 [AWX](https://github.com/ansible/awx) 自动化安装程序，开发语言是 Ansible。使用本项目，只需要用户在 Linux 上运行一条命令，即可自动化安装 AWX，让原本复杂的安装过程变得没有任何技术门槛。  

![](https://libs.websoft9.com/Websoft9/DocsPicture/en/awx/awxui-websoft9.png)

本项目是开源项目，采用 LGPL3.0 开源协议。

## 配置要求

安装本项目，确保符合如下的条件：

| 条件       | 详情       | 备注  |
| ------------ | ------------ | ----- |
| 操作系统       | CentOS7.x, Ubuntu18.04, Amazon Linux2       |    |
| 公有云| AWS, Azure, 阿里云, 华为云, 腾讯云 |  |
| 私有云|  KVM, VMware, VirtualBox, OpenStack |  |
| 服务器配置 | 最低2核4G，安装时所需的带宽不低于10M |  建议采用按量100M带宽 |

## 组件

包含的核心组件为：AWX, Docker, Node.jS等

更多请见[参数表](/docs/zh/stack-components.md)

## 本项目安装的是 AWX 最新版吗？

本项目采用官方提供的Github自动化项目部署，[awx_version](/roles/awx/defaults/main.yml)参数维护版本值，保证部署为 AWX 官方发布的最新稳定版。

我们会定期测试本项目，以保证用户可以顺利安装。  

AWX 的最新版本号[查看地址](https://github.com/ansible/awx/releases)

## 安装指南

登录 Linux，运行下面的**命令脚本**即可启动自动化部署，然后耐心等待，直至安装成功。

```
#非 root 用户登录后，需先提升成为 root 权限
sudo su -

#自动化安装命令
wget -N https://raw.githubusercontent.com/Websoft9/ansible-linux/master/scripts/install.sh; bash install.sh -r awx

```

**安装中的注意事项：**   

1. 操作不慎或网络发生变化，可能会导致SSH连接被中断，安装就会失败，此时请重新安装
2. 安装缓慢、停滞不前或无故中断，主要是网络不通（或网速太慢）导致的下载问题，此时请重新安装
3. 本项目只能用于localhost安装，不支持【主控机-受控机】模式

多种原因导致无法顺利安装，请使用我们在公有云上发布的 [AWX 镜像](https://apps.websoft9.com/awx) 的部署方式


## 文档

文档链接：https://support.websoft9.com/docs/awx/zh

## FAQ

- 命令脚本部署与镜像部署有什么区别？请参考[镜像部署-vs-脚本部署](https://support.websoft9.com/docs/faq/zh/bz-product.html#镜像部署-vs-脚本部署)
- 本项目支持在 Ansible Tower 上运行吗？支持
