import axios from "axios";
import StorageUtils from "./StorageUtils";
import {notification} from "antd";

const instance = axios.create({
    // baseURL: 'https://qyhtest.citic.com',
    timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    config.headers.token = StorageUtils.getToken();
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code === 0) {
        return response;
    } else {
        notification.error({
            message: '操作失败',
            description: response.data.msg
        })
        return Promise.reject(response);
    }

}, function (error) {
    let response = error.response;
    if (response) {
        if (response.status === 500) {
            notification.error({
                message: '操作失败',
                description: '服务器错误，请重新尝试'
            })
        } else if (response.status === 404) {
            notification.error({
                message: '操作失败',
                description: '访问接口路径不存在'
            })
        } else if(response.status === 401) {
            notification.error({
                message: '权限错误',
                description: '你没有权限访问，请重新登录'
            })
            window.location.href = '/login';
        }
    } else {
        if (error.message === 'Network Error') {
            notification.error({
                message: '操作失败',
                description: '网络错误，请重新尝试'
            })
        } else if (error.message.includes('timeout')) {
            notification.error({
                message: '操作失败',
                description: '请求超时'
            })
        }
    }
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;
