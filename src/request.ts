import { rejects } from "assert";
import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 6000
})

export const get = (url: string, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}