import axios from 'axios';
import { Navigate } from "react-router-dom";
//import config from '../../config';

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers = {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
};
//axios.defaults.baseURL = config.API_URL;
// axios.defaults.httpsAgent = new https.Agent({
//     rejectUnauthorized: false,
// });

// intercepting to capture errors
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        let message;

        if (error && error.response && error.response.status === 404) {
            <Navigate to="/error-404" />
        } else if (error && error.response && error.response.status === 500) {
            <Navigate to="/error-500" />
        } else {
            message = error.response && error.response.data ? error.response.data['message'] : error.message || error;
            return Promise.reject(message);
        }
    }
);

class APICore {
    /**
     * Fetches data from given url
     */
    get = (url, params) => {
        let response;
        if (params) {
            var queryString = params
                ? Object.keys(params)
                    .map((key) => key + '=' + params[key])
                    .join('&')
                : '';
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }
        return response;
    };

    /**
     * post given data to url
     */
    create = (url, data) => {
        return axios.post(url, data);
    };
}

export { APICore };
