import axios from "../utils/axiosInstance";

export const shelterService = {
  async getEQById(shelterId: number) {
    let result: { success: boolean; data: any };
    result = await axios.get(`/shelters/earthquake/${shelterId}`)
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getEQDong(dongId: number, pageNum: number) {
    let result: { success: boolean; data: any };
    const params = { dong_id: dongId, page: pageNum };
    result = await axios.get(`/shelters/earthquake`, { params })
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getEQCurrent(latitude: number, longitude: number, radius?: number) {
    let result: { success: boolean; data: any };
    const params = { lat: latitude, lon: longitude, radius: radius };
    result = await axios.get(`/shelters/earthquake/current`, { params })
      .then((s) => s)
      .catch((e) => e);
    return result
  },

  async getTsuById(shelterId: number) {
    let result: { success: boolean; data: any };
    result = await axios.get(`/shelters/tsunami/${shelterId}`)
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getTsuDong(dongId: number, pageNum: number) {
    let result: { success: boolean; data: any };
    const params = { dong_id: dongId, page: pageNum };
    result = await axios.get(`/shelters/tsunami`, { params })
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getTsuCurrent(latitude: number, longitude: number, radius?: number) {
    let result: { success: boolean; data: any };
    const params = { lat: latitude, lon: longitude, radius: radius };
    result = await axios.get(`/shelters/tsunami/current`, { params })
      .then((s) => s)
      .catch((e) => e);
    return result
  },

  async getCDById(shelterId: number) {
    let result: { success: boolean; data: any };
    result = await axios.get(`/shelters/civil-defense/${shelterId}`)
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getCDDong(dongId: number, pageNum: number) {
    let result: { success: boolean; data: any };
    const params = { dong_id: dongId, page: pageNum };
    result = await axios.get(`/shelters/civil-defense`, { params })
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getCDCurrent(latitude: number, longitude: number, radius?: number) {
    let result: { success: boolean; data: any };
    const params = { lat: latitude, lon: longitude, radius: radius };
    result = await axios.get(`/shelters/civil-defense/current`, { params })
      .then((s) => s)
      .catch((e) => e);
    return result
  },

  async getShelterCount() {
    let result: {
      success: boolean; data: {
        tsunami: number;
        earthquake: number;
        civilDefence: number;
      }
    };
    result = await axios.get(`/shelters/count`)
      .then((res) => res)
      .catch(err => err)
    return result
  },
  async getShelterCurrent(current: any) {
    let result: { success: boolean; data: any };
    const params = { lat: current.latitude, lon: current.longitude }
    result = await axios.get(`/shelters/current`, { params })
      .then((res) => res)
      .catch(err => err)
    return result
  }
};