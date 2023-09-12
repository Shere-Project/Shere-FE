import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  // headers: {}
})

export default axiosInstance;