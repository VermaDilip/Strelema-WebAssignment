import axios from 'axios';

const API_BASE_URL = 'https://strelema-task.onrender.com/api';

export const getEmployees = async (page = 1, limit = 10, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};