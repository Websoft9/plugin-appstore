## Introduction

[English](/README.md) | [Chinese](/README-zh.md)  

**Ansible-RabbitMQ Automatic Installer**, developed by [Websoft9](https://www.websoft9.com), is an automatic installation program of [RabbitMQ](https://rabbitmq.io/) based on Ansible. This repository helps users install RabbitMQ and pre-configure required items automatically and users only need to run a command on Linux. It simplifies the complicated installation and initialization process.  

## System Requirement

System Requirement to install this repository are as following：

| Conditions       | Details                               | Notes                |
| ---------- | ------------------------------------- | -------------------- |
| Operating System   | CentOS7.x, Ubuntu18.04, Amazon Linux2 | Optional                 |
| Public Cloud     | AWS, Azure, Alibaba Cloud, HUAWEI ClOUD, Tencent Cloud    | Optional                 |
| Private Cloud     | KVM, VMware, VirtualBox, OpenStack    | Optional                 |
| Server Configuration | vCPU no less than 1 core, Memory no less than  1 GIB, Storage no less than 20 GB, Bandwidth no less than 100M ||

To learn more information, please view [ System Requirement](https://www.rabbitmq.com/download.html).

## Ecosystem

Core components of this repository: 
Optional versions of RabbitMQ2.8.24/3.0.7/3.2.13/4.0.14/5.0.7/stable 

Learn more about [stock-components](/docs/zh/stack-components.md).

## Installation

You can install it by All-in-one Installer. In addition, you can deploy image published on major Cloud Platform by Websoft9.

### All-in-one Installer

Run the automatic installation script with **root** authority to start the installation. If necessary, users need to make interactive choices, and then wait patiently until the installation is successful.

```
$ sudo su -
$ wget -N https://raw.githubusercontent.com/Websoft9/ansible-linux/master/scripts/install.sh; bash install.sh -r rabbitmq
```

If the network is broken or blocked, SSH will be interrupted and the installation will fail. Please reinstall.

### Image on Cloud 

Follow our [RabbitMQ image](https://apps.websoft9.com/rabbitmq) for installation on major Cloud Platform.

## Documentation

To get information about initial installation, parameters, user name, password, RabbitMQ Configuration, HTTPS, SMTP, Backup, Upgrade and more, please view RabbitMQ Administrator Guide. ([English](https://support.websoft9.com/docs/rabbitmq/zh) | [Chinese](https://support.websoft9.com/docs/rabbitmq/zh))


## Changelog

Detailed changes are documented in the [CHANGELOG](/CHANGELOG.md).

## License

[MIT](http://opensource.org/licenses/MIT), Additional Terms: It is not allowed to publish free or paid image based on this repository in any Cloud platform's Marketplace.

Copyright (c) 2016-present, Websoft9

## FAQ

#### What's the difference between All-in-one Installer and Image deployment on Cloud?



#### Can I run this repository on Ansible Tower? 

Yes.

#### How to install and view the latest release？

This repository is installed through [Official RabbitMQ-Repositories](https://packagecloud.io/rabbitmq/rabbitmq-server/install), so each installation is guaranteed to be the latest version. You can view the latest release on [RabbitMQ Official Download Page](https://www.rabbitmq.com/download.html). 
