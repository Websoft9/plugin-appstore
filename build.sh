#!/bin/bash
yarn build
rm -rf /usr/share/cockpit/appstore/*
cp -r /data/plugin-cockpit/plugin-appstore/build/* /usr/share/cockpit/appstore/