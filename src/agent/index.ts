
import axios from "axios";
import urlJoin from "url-join";
import endpointsConfig from "./endpointsConfig";
import { getToken } from "@/utils/auth";


const agent: any = axios.create({
    headers: {
        contentType: 'application/json'
    }
})




// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response.status == 500) {
    //     // do something
    // }
    return Promise.reject(error);
});

const APIoptions = async (method: any, endpointType: "user" | "auth", endpointPath: any, options: any) => {
    const baseUrl = endpointsConfig[endpointType]

    const endpoints = urlJoin(baseUrl, endpointPath)

    const token = await getToken()
    agent.defaults.headers = {
        "Authorization": token
    }
    let response;

    if (method == "get") {
        response = agent[method](endpoints, { headers: { ...options.headers }, params: { ...options.params } })
    }
    else {
        response = agent[method](endpoints, { ...options.body }, { headers: { ...options.headers }, params: { ...options.params } })
    }

    return response;

}


export const API = {
    "post": (endpointType: any, endpointPath: any, options: any) => APIoptions("post", endpointType, endpointPath, options),
    "get": (endpointType: any, endpointPath: any, options: any) => APIoptions("get", endpointType, endpointPath, options),
    "put": (endpointType: any, endpointPath: any, options: any) => APIoptions("put", endpointType, endpointPath, options),
    "delete": (endpointType: any, endpointPath: any, options: any) => APIoptions("delete", endpointType, endpointPath, options),
}

