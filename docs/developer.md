# Developer

## Technology Stack

**Frontend**  

- ui: 
- js framework: 

**Backend API**  

- apphub: this is for application deployment and storage application master data
- cockpit: this is for running command at host machine


## Build and Test

You should install [Websoft9](https://github.com/Websoft9/websoft9) for testing, then build it:

```
git clone https://github.com/Websoft9/plugin-appstore
cd plugin-appstore
yarn build && cp -r ./build/* /usr/share/cockpit/appstore/
```

