import { APICore } from "./apiCore";

const api = new APICore();

// 获取产品目录
function AppCatalog(locale: String, params: any): Promise<any> {
    const baseUrl = `/apps/catalog/${locale}`;
    return api.get(`${baseUrl}`, params);
}

// 获取产品列表
function AppAvailable(locale: String, params: any): Promise<any> {
    const baseUrl = `/apps/available/${locale}`;
    return api.get(`${baseUrl}`, params);
}

// 安装应用
function AppInstall(params: any, body: any): Promise<any> {
    const baseUrl = '/apps/install';
    return api.post(`${baseUrl}`, params, body);
}

// 获取设置
function GetSettingsBySection(section: String, params: any): Promise<any> {
    const baseUrl = `/settings/${section}`;
    return api.get(`${baseUrl}`, params);
}

export { AppAvailable, AppCatalog, AppInstall, GetSettingsBySection };

