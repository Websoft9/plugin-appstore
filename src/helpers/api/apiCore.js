import axios from 'axios';
import cockpit from 'cockpit';

// content type
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}/api`;

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
            throw new Error("Permission denied");
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
        return axios.get(url, { params });
    };

    post = async (url, params, data) => {
        axios.defaults.headers.common['x-api-key'] = await getApiKey();
        return axios.post(url, data, { params });
    };

    put = async (url, params, data) => {
        axios.defaults.headers.common['x-api-key'] = await getApiKey();
        return axios.put(url, data, { params });
    };

    delete = async (url, params) => {
        axios.defaults.headers.common['x-api-key'] = await getApiKey();
        return axios.delete(url, { params });
    };
}

export { APICore };
