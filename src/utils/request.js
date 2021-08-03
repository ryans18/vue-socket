import axios  from "axios";
import {getToken} from '@/utils/auth';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        config.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ getToken()
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        let data = {};
        if(response){
            data=response.data;
        }
        return data;
    },
    (error) => {
        console.log('请求出错：',JSON.stringify(error));
        return Promise.reject(error.response);
    }
);

export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    });
};

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        });
    });
};