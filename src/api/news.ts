import { AxiosResponse } from "axios";
import axios from "../utils/axiosInstance";

export const newsService = {
  async getNewsList(pageNum: number) {
    let result: AxiosResponse<any, any>;
    const params = { page: pageNum }
    result = await axios.get(`/news`, { params })
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getNewsContent(newsId: number) {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/news/${newsId}`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getPrevNews(newsId: number) {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/news/${newsId}/prev`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getNextNews(newsId: number) {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/news/${newsId}/next`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
}