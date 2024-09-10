import axios from 'axios';
import cockpit from 'cockpit';

// content type
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

const getNginxConfig = async () => {
    try {
        var script = "docker exec -i websoft9-apphub apphub getconfig --section nginx_proxy_manager";
        let content = (await cockpit.spawn(["/bin/bash", "-c", script], { superuser: "try" })).trim();
        content = JSON.parse(content);
        let listen_port = content.listen_port;

        if (!listen_port) {
            throw new Error("Nginx Listen Port Not Set");
        }

        return listen_port;
    }
    catch (error) {
        const errorText = [error.problem, error.reason, error.message]
            .filter(item => typeof item === 'string')
            .join(' ');

        if (errorText.includes("permission denied")) {
            throw new Error("Your user does not have Docker permissions. Grant Docker permissions to this user by command: sudo usermod -aG docker <username>");
        }
        else {
            throw new Error(errorText || "Get Nginx Listen Port Error");
        }
    }
}

const getApiKey = async () => {
    try {
        var script = "docker exec -i websoft9-apphub apphub getconfig --section api_key --key key";
        const api_key = (await cockpit.spawn(["/bin/bash", "-c", script], { superuser: "try" })).trim();
        if (!api_key) {
            throw new Error(" Api Key Not Set");
        }
        return api_key
    }
    catch (error) {
        const errorText = [error.problem, error.reason, error.message]
            .filter(item => typeof item === 'string')
            .join(' ');

        if (errorText.includes("permission denied")) {
            throw new Error("Your user does not have Docker permissions. Grant Docker permissions to this user by command: sudo usermod -aG docker <username>");
        }
        else {
            throw new Error(errorText || "Get The Apphub's Api Key Error");
        }
    }
}

// intercepting to capture errors
axios.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data;
        }
        // else if (response.status === 204) {
        //     return null;
        // }
    },
    (error) => {
        error.message = error.response?.data?.details || error.message || "Unknown Error";
        return Promise.reject(error);
    }
);

class APICore {
    get = async (url, params) => {
        axios.defaults.headers.common['x-api-key'] = await getApiKey();
        axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:` + await getNginxConfig() + "/api";
        return axios.get(url, { params });
    };

    post = async (url, params, data) => {
        axios.defaults.headers.common['x-api-key'] = await getApiKey();
        axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:` + await getNginxConfig() + "/api";
        return axios.post(url, data, { params });
    };

    put = async (url, params, data) => {
        axios.defaults.headers.common['x-api-key'] = await getApiKey();
        axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:` + await getNginxConfig() + "/api";
        return axios.put(url, data, { params });
    };

    delete = async (url, params) => {
        axios.defaults.headers.common['x-api-key'] = await getApiKey();
        axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:` + await getNginxConfig() + "/api";
        return axios.delete(url, { params });
    };
}

export { APICore };
