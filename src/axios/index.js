import axios from "axios"

// 添加请求拦截器（多用在请求时传输token）
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("config",config)
    if(config.url === "/api/system/user/login"){
        // console.log("config",config)
    }else{
        config.headers.Authorization = `Bearer ${localStorage.getItem("Authorization")}`
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器 (多用来做请求错误的统一处理：状态码... token错误)
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("response",response)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default axios;