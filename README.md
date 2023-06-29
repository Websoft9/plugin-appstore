[![](https://lab.frogg.it/lydra/yunohost/ansible-yunohost/badges/main/pipeline.svg)](https://lab.frogg.it/lydra/yunohost/ansible-yunohost/-/pipelines)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
[![GitHub last commit](https://img.shields.io/github/last-commit/LydraFr/ansible-yunohost)](https://github.com/LydraFr/ansible-yunohost)
[![GitHub Release Date](https://img.shields.io/github/release-date/LydraFr/ansible-yunohost)](https://github.com/LydraFr/ansible-yunohost)
[![GitHub Repo stars](https://img.shields.io/github/stars/LydraFr/ansible-yunohost?style=social)](https://github.com/LydraFr/ansible-yunohost)

# Websoft9 Plugin - `appstore`

This plugin for listing and install templating application. include WordPress, MySQL, GitLab and other 300+ open source  

![image](https://github.com/Websoft9/plugin-appstore/assets/16741975/74c3919c-9906-448d-aab9-9334d8fb8d60)


# Prerequisites

Your server must be Debian-Buster based and Yunohost shouldn't be already installed.

## Collection contents

### Roles

- [`lydra.yunohost.ynh_setup`](roles/ynh_setup/README.md): This role prepares servers with Debian-Buster-based to run Yunohost. It sets up Yunohost with its initial settings and domains, users and apps of your choice.
- [`lydra.yunohost.ynh_apps`](roles/ynh_apps/README.md): This role installs Yunohost apps of your choice and can perform post-install tasks.
- [`lydra.yunohost.ynh_config`](roles/ynh_config/README.md): This role configures various Yunohost services (SMTP relay, auto updates).
- [`lydra.yunohost.ynh_backup`](roles/ynh_backup/README.md): This role manages the configuration of backups.

## Role Tags

These tags are applicable to roles.

|tags|comment|
|----|-------|
|pkg|Tasks that install packages.|
|linux|Tasks related to Linux.|
|yunohost|Tasks specific to Yunohost itself (setup or configuration).|
|users|Tasks specific to users in Yunohost.|
|domains|Tasks specific to domains linked to Yunohost.|
|apps|Tasks specific to Yunohost apps.|
|update|Tasks related to Yunohost update settings.|
|smtp|Tasks related to Yunohost smtp relay settings.|
|settings|Tasks related to Yunohost settings.|
|backup|Tasks related to local Yunohost backups.|
|borg|Tasks related to backups with BorgBackup.|
|restic|Tasks related to backups with Restic.|

## License

**plugin-appstore** is maintained by [Websoft9](https://www.websoft9.com) and released under the GPL3 license.


## Appstore data and image localization deployment

1. Execute Action：```Fetch Contentful Data and Oss Images```
2. Exec Script : ```sh /data/test/syncdata.sh```

