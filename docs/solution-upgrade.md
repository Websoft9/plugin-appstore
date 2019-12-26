# Update & Upgrade

Updates and upgrades are one of the maintenance tasks for sytem. Programs that are not upgraded for a long time, like buildings that are not maintained for a long time, will accelerate aging and gradually lose functionality until they are unavailable.

You should know the differences between the terms **Update** and **Upgrade**([Extended reading](https://support.websoft9.com/docs/faq/tech-upgrade.html#update-vs-upgrade))
- Operating system patching is **Update**, Ubuntu16.04 to Ubuntu18.04 is **Upgrade**
- MySQL5.6.25 to MySQL5.6.30 is **Update**, MySQL5.6 to MySQL5.7 is **Upgrade**

For AWX maintenance, focus on the following two Update & Upgrade jobs

- Sytem update(Operating System and Running Environment) 
- AWX upgrade 

## System Update

Run an update command to complete the system update:

``` shell
#For Ubuntu
apt update && apt upgrade -y

#For Centos&Redhat
yum update -y
```
> This deployment package is pre-configured with a scheduled task for automatic updates. If you want to remove the automatic update, please delete the corresponding Cron

## AWX Upgrade

Upgrading AWX involves rerunning the install playbook. Download a newer release from https://github.com/ansible/awx/releases and re-populate the inventory file with your customized variables.

For convenience, you can create a file called vars.yml:

admin_password: 'adminpass'
pg_password: 'pgpass'
rabbitmq_password: 'rabbitpass'
secret_key: 'mysupersecret'
And pass it to the installer:

$ ansible-playbook -i inventory install.yml -e @vars.yml