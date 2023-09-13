import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines?q=trump', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': 'cebd4986a6fb4f648e1b2824739e74e5'
  },
});

export default axiosInstance;
