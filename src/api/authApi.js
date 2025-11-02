import axios from 'axios';

const API_BASE_URL = 'https://strelema-task.onrender.com/api';

export const login = async (phone, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      phone,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};