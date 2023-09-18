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
    const params = { id: dongId, page: pageNum };
    result = await axios.get(`shelters/earthquake`, { params })
  },
  async getEQCurrent() {
    let result: { success: boolean; data: any };
  },

  async getTsuById() {
    let result: { success: boolean; data: any };
  },
  async getTsuDong() {
    let result: { success: boolean; data: any };
  },
  async getTsuCurrent() {
    let result: { success: boolean; data: any };
  },

  async getCDById() {
    let result: { success: boolean; data: any };
  },
  async getCDDong() {
    let result: { success: boolean; data: any };
  },
  async getCDCurrent() {
    let result: { success: boolean; data: any };
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