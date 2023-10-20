[![](https://lab.frogg.it/lydra/yunohost/ansible-yunohost/badges/main/pipeline.svg)](https://lab.frogg.it/lydra/yunohost/ansible-yunohost/-/pipelines)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
[![GitHub last commit](https://img.shields.io/github/last-commit/LydraFr/ansible-yunohost)](https://github.com/LydraFr/ansible-yunohost)
[![GitHub Release Date](https://img.shields.io/github/release-date/LydraFr/ansible-yunohost)](https://github.com/LydraFr/ansible-yunohost)
[![GitHub Repo stars](https://img.shields.io/github/stars/LydraFr/ansible-yunohost?style=social)](https://github.com/LydraFr/ansible-yunohost)

# Websoft9 Plugin - `appstore`

This plugin for listing and install templating application. include WordPress, MySQL, GitLab and other 300+ open source apps. If you want to contribute more apps to AppStore, please fork [docker-library](https://github.com/Websoft9/docker-library)

![image](https://github.com/Websoft9/plugin-appstore/assets/16741975/74c3919c-9906-448d-aab9-9334d8fb8d60)

## Installation and update

Your server must be have [Websoft9](https://github.com/Websoft9) installed.  

```
cd /usr/share/cockpit
wget https://artifact.azureedge.net/release/websoft9/plugin/appstore/appstore-latest.zip && unzip appstore-latest.zip && rm -f appstore-latest.zip

# Appstore data and image localization deployment
1. Execute Action：```Fetch Contentful Data and Oss Images```
2. Exec Script : ```sh /data/test/syncdata.sh```
```

## Development

See Developer.md for details about how to efficiently change the code, run, and test it.

### Building

These commands check out the source and build it into the directory:build/
```
git clone https://github.com/Websoft9/plugin-appstore
cd plugin-appstore
npm build
```
You can also triggers action workflow for building

### Automated release

Two scenarios that trigger automatic publishing:

* Repository Onwer create release at Github
* [docker-library](https://github.com/Websoft9/docker-library)  triggers action workflow

This creates the official release tarball and publishes as upstream release to GitHub.

### 

## License

**plugin-appstore** is maintained by [Websoft9](https://www.websoft9.com) and released under the GPL3 license.
