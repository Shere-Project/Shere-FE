import { AxiosResponse } from "axios";
import axios from "../utils/axiosInstance";

export interface TownShelters {
  totalCount: number;
  totalPage: number;
  page: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
  content: Array<{
    id: number;
    name: string;
    fullAddress: string;
    latitude: number;
    longitude: number;
    area: number,
    type: string;
  }>
}

export const shelterService = {
  async getEQById(shelterId: number) {
    let result: AxiosResponse<any, any>;
    result = await axios.get(`/shelters/earthquake/${shelterId}`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getEQDong(dongId: number, pageNum: number) {
    let result: AxiosResponse<TownShelters, any>;
    const params = { dong_id: dongId, page: pageNum };
    result = await axios.get(`/shelters/earthquake`, { params })
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getEQCurrent(latitude: number, longitude: number, radius?: number) {
    let result: AxiosResponse<any, any>
    const params = { lat: latitude, lon: longitude, radius: radius };
    result = await axios.get(`/shelters/earthquake/current`, { params })
      .then((res) => res)
      .catch((e) => e);
    return result
  },

  async getTsuById(shelterId: number) {
    let result: AxiosResponse<any, any>
    result = await axios.get(`/shelters/tsunami/${shelterId}`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getTsuDong(dongId: number, pageNum: number) {
    let result: AxiosResponse<any, any>
    const params = { dong_id: dongId, page: pageNum };
    result = await axios.get(`/shelters/tsunami`, { params })
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getTsuCurrent(latitude: number, longitude: number, radius?: number) {
    let result: AxiosResponse<any, any>
    const params = { lat: latitude, lon: longitude, radius: radius };
    result = await axios.get(`/shelters/tsunami/current`, { params })
      .then((res) => res)
      .catch((e) => e);
    return result
  },

  async getCDById(shelterId: number) {
    let result: AxiosResponse<any, any>
    result = await axios.get(`/shelters/civil-defense/${shelterId}`)
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getCDDong(dongId: number, pageNum: number) {
    let result: AxiosResponse<any, any>
    const params = { dong_id: dongId, page: pageNum };
    result = await axios.get(`/shelters/civil-defense`, { params })
      .then((res) => res)
      .catch((e) => e);
    return result
  },
  async getCDCurrent(latitude: number, longitude: number, radius?: number) {
    let result: AxiosResponse<any, any>
    const params = { lat: latitude, lon: longitude, radius: radius };
    result = await axios.get(`/shelters/civil-defense/current`, { params })
      .then((res) => res)
      .catch((e) => e);
    return result
  },

  async getShelterCount() {
    let result: AxiosResponse<{
      tsunami: number;
      earthquake: number;
      civilDefence: number;
    }, any>
    result = await axios.get(`/shelters/count`)
      .then((res) => res)
      .catch(err => err)
    return result
  },
  async getShelterCurrent(current: any) {
    let result: AxiosResponse<any, any>
    const params = { lat: current.latitude, lon: current.longitude }
    result = await axios.get(`/shelters/current`, { params })
      .then((res) => res)
      .catch(err => err)
    return result
  }
};