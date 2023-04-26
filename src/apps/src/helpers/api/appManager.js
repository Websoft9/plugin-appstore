import { APICore } from './apiCore';

const api = new APICore();

//App 安装
function AppInstall(params: any): Promise<any> {
    const baseUrl = '/AppInstall';
    return api.get(`${baseUrl}`, params);
}

//App 列表查询
function AppList(params: any): Promise<any> {
    const baseUrl = '/AppList';
    return api.get(`${baseUrl}`, params);
}

//App 卸载
function AppUninstall(params: any): Promise<any> {
    const baseUrl = '/AppUninstall';
    return api.get(`${baseUrl}`, params);
}

//App 停止
function AppStop(params: any): Promise<any> {
    const baseUrl = '/AppStop';
    return api.get(`${baseUrl}`, params);
}

//App 启动
function AppStart(params: any): Promise<any> {
    const baseUrl = '/AppStart';
    return api.get(`${baseUrl}`, params);
}

//App 重启
function AppRestart(params: any): Promise<any> {
    const baseUrl = '/AppRestart';
    return api.get(`${baseUrl}`, params);
}

//App 状态查询
function AppStatus(params: any): Promise<any> {
    const baseUrl = '/AppStatus';
    return api.get(`${baseUrl}`, params);
}

export { AppInstall, AppList, AppUninstall, AppStop, AppStart, AppRestart, AppStatus };

