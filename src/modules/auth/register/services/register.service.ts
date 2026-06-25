import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

export const registerService = {
  async register(userData: {
    name: string;
    email: string;
    password: string;
    birthdate?: string;
    address?: string;
    phone?: string;
  }) {
    try {
      const response = await axios.post(`${API_URL}auth/register`, userData);
      return response.data;
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      throw new Error(
        err.response?.data?.message || "Error en el registro del usuario",
      );
    }
  },
};
