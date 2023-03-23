import axios from "axios"

const axiosClient = (() => {
    return axios.create({
        baseURL: "http://localhost:3000/api",
        timeout: 20000,
    });
})();


const getRequest = async function <T>(options?: any, token?: any) {

    const onError = function (error: any) {

        return Promise.reject(error.response);
    };

    if (token != undefined) {
        const client = axios.create({
            baseURL: "http://localhost:3000/api",
            timeout: 20000,
            headers: { 'Authorization': 'Bearer ' + token }
        });

        return client(options).then<T>().catch(onError);
    }
    return axiosClient(options).then<T>().catch(onError);
}


const postRequest = async function (options: any, data: any) {

    const onError = function (error: any) {
        return Promise.reject(error.response);
    };

    return axiosClient.post(options.url, data, options).then().catch(onError);
}

export { postRequest, getRequest }