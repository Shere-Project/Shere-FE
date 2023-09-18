import { IAdDiv } from "@/pages/find_shelter";
import axios from "../utils/axiosInstance";

export const mapService = {
  async getCurrentLatLng() {
    return new Promise((resolve: PositionCallback, reject: PositionErrorCallback) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    }).then(res => ({
      latitude: res.coords.latitude,
      longitude: res.coords.longitude
    })).catch(e => e)
  },
  async getSiDos() {
    let result: {
      success: boolean; data: {
        totalCount: number; content: Array<IAdDiv>
      }
    };
    result = await axios.get(`/sidos`)
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getSiGunGus(id: number) {
    let result: {
      success: boolean; data: {
        totalCount: number; content: Array<IAdDiv>
      }
    };
    result = await axios.get(`/sidos/${id}`)
      .then((s) => s)
      .catch((e) => e);
    return result
  },
  async getMyeonDongs(id: number) {
    let result: {
      success: boolean; data: {
        totalCount: number; content: Array<IAdDiv>
      }
    };
    result = await axios.get(`/sigungus/${id}`)
      .then((s) => s)
      .catch((e) => e);
    return result
  }
};