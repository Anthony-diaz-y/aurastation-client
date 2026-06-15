import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

export const loginService = {
  async login(userData: { email: string; password: string }) {
    try {
      const response = await axios.post(`${API_URL}auth/login`, userData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Error en el inicio de sesión",
      );
    }
  },
  async logout() {
    try {
      const response = await axios.post(`${API_URL}auth/logout`, {}, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Error al cerrar sesión",
      );
    }
  },
};
