import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

export const registerService = {
  async register(userData: { email: string; password: string }) {
    try {
      const response = await axios.post(`${API_URL}auth/register`, userData);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Error en el registro del usuario",
      );
    }
  },
};
