#!/bin/bash
cd /data/stackhub-web/plugins/nginxproxymanager/build
yarn build
while [ ! -d "/usr/share/cockpit/nginxproxy" ]; do
  sleep 1
done
cp -r ./* /usr/share/cockpit/nginxproxy/
