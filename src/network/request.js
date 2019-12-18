import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

instance.interceptors.request.use(config => {
    if (config.method.toUpperCase() === "GET"){
        config.params = {...config.params}
    } else if (config.method.toUpperCase === "POST"){
        config.headers["content-type"] = "application/json";
        config.data = qs.stringify(config.data);
    }else if (config.method.toUpperCase === "DELETE"){
      // config.headers["content-type"] = "application/x-www-form-urlencoded;charset=utf-8";
      config.params = `{data:{...config.data}}`
    }else if (config.method.toUpperCase === "PUT") {
      config.headers["content-type"] = "application/json";
      config.data = qs.stringify(config.data);
    }
    return config
},err => {
    Promise.reject(err);
})

instance.interceptors.response.use(res => {
    return res.data
},err => {
    Promise.reject(err);
})

export default (method,url,data={}) =>{
    if (method.toString().toUpperCase() == "GET"){
        return instance.get(url,{
            params: data
        })
    } else if (method.toString().toUpperCase() == "POST") {
        return instance.post(url,data)
    }else if (method.toString().toUpperCase() == "DELETE"){
      return instance.delete(url,{
          params:data
      })
    }else if (method.toString().toUpperCase() == "PUT"){
        return instance.put(url,data)
    }
}




// export function request(config) {
//     const instance = axios.create({
//         baseURL: 'http://localhost:3000',
//         timeout: 5000
//     });
//     instance.interceptors.request.use(config => {
//         return config
//     },error => {
//         return error
//     })
//
//     instance.interceptors.response.use(res => {
//         return res.data
//     },err => {
//         console.log(err)
//     })
//
//     return instance(config)
// }

