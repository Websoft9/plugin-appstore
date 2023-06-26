#!/bin/bash
cd /data/cockpit-plugins/plugin-appstore/build
yarn build
while [ ! -d "/usr/share/cockpit/appstore" ]; do
  sleep 1
done
cp -r ./* /usr/share/cockpit/appstore/
