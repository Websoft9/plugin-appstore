#!/bin/bash
cd /data/cockpit-plugins/plugin-appstore
yarn build && cp -r ./build/* /usr/share/cockpit/appstore/