import axios from "axios";
import store from "@/store"

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL
});

instance.interceptors.request.use((config) => {
  let token = store.state.app.token
  if (token) {
    config.headers["X-AUTH"] = token
  }
  return config;
})
instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  
  return Promise.reject(error);
})

export default instance;
