import { APICore } from './apiCore';

const api = new APICore();

//安装应用
function installApp(params: any): any {
    const baseUrl = '/api/v1/apps/install';
    return api.get(`${baseUrl}`, params);
}

//获取已经安装的应用
function getInstalledApps(params: any): Promise<any> {
    const baseUrl = '/api/v1/apps';
    return api.get(`${baseUrl}`, params);
}

//卸载应用
function unInstallApp(params: any): any {
    const baseUrl = '/api/v1/apps/uninstall';
    return api.get(`${baseUrl}`, params);
}

//获取应用安装进度
function getInstallProgress(params: any): Promise<any> {
    const baseUrl = '/api/v1/apps/process';
    return api.get(`${baseUrl}`, params);
}

//停止应用
function stopApp(params: any): any {
    const baseUrl = '/api/v1/apps/stop';
    return api.get(`${baseUrl}`, params);
}

//启动应用
function startApp(params: any): any {
    const baseUrl = '/api/v1/apps/start';
    return api.get(`${baseUrl}`, params);
}

//查询应用详情
function getAppDetails(params: any): any {
    const baseUrl = '/api/v1/apps/details';
    return api.get(`${baseUrl}`, params);
}

export { installApp, getInstalledApps, unInstallApp, getInstallProgress, stopApp, startApp, getAppDetails };

