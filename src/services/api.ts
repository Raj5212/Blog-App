import axios from 'axios';

const API_KEY = '9fc01eec1c994a71822fe007c8c93fbb'; 
const BASE_URL = 'https://newsapi.org/v2';

export const getBlogPosts = async (page: number) => {
  const response = await axios.get(`${BASE_URL}/everything`, {
    params: {
      q: 'blog',
      pageSize: 10,
      page,
      apiKey: API_KEY,
    },
  });
  return response.data;
};
