import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api3-1-mams.onrender.com',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  }
});


export default axiosInstance;
