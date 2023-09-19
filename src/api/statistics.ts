import { AxiosResponse } from "axios";
import axios from "../utils/axiosInstance";

export const statisticsService = {
  async updateSearch(townId: number, type: number) {
    let result: AxiosResponse<any, any>;
    const data = {dong_id: townId, type: type}
    result = await axios.put(`/search-volumes`, data)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getDailyTotal() {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/search-volumes/total`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getWeeklyTotal() {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/search-volumes/week-total`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getState() {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/search-volumes/sidos`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getCity(cityId: number) {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/search-volumes/sidos/${cityId}`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getTownWeekly(townId: number) {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/search-volumes/week/dongs/${townId}`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
}