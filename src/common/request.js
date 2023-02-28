import axios from 'axios';
import { BASE_URL } from './utils/baseURL';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000
});

export const sendRequest = (config) => {
    return axiosInstance.request(config)
}

export const getRequest = (params) => {
    console.log(params);
    return sendRequest({
        method: "get",
        url: params
    })
}

export const postRequest = (path, ans) => {
    return sendRequest({
        method: 'post',
        url: path,
        data: JSON.stringify(ans),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const putRequest = (path, ans) => {
    return sendRequest({
        method: 'put',
        url: path + ans.id,
        data: JSON.stringify(ans),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const deleteRequest = (path , id) => {
    return sendRequest({
        method : 'delete',
        url : path+id
    })
}