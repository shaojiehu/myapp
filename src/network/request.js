import axios from 'axios'

export function request(config){
 const instance = axios.create({
     baseURL: "https://httpbin.org",
     timeout: 5000
 });
 instance.interceptors.request.use(
    res => {
      return res
    },
    err => console.log("",err)  
    )
 instance.interceptors.response.use()
    return instance(config)
}
