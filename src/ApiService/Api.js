import axios from "axios";

const API_URL = 'https://course-api.com/react-tours-project'

export const getAllTourData = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response?.data;
    
    } catch (error) {
      return [];
    }
  };
  