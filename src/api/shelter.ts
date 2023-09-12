import axios from "../utils/axiosInstance";

export const shelterService = {
  async getEQById(shelterId: number) {
    let result: { success: boolean; data: any };
    result = await axios.get(`/shelters/earthquake/${shelterId}`)
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getEQDong() {

  },
  async getEQCurrent() {

  },
  async getTsuById() {

  },
  async getTsuDong() {

  },
  async getTsuCurrent() {

  },
  async getCDById() {

  },
  async getCDDong() {

  },
  async getCDCurrent() {

  },
  async getShelterCount() {
    let result: { success: boolean; data: any };

    result = await axios.get(`/shelters/count`)
      .then((res) => res)
      .catch(err => err)
    return result
  },
  async getShelterCurrent() {

  }
};