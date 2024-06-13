import axios from 'axios';

const foodApiInstance = axios.create({
  baseURL: 'https://api3-1-mams.onrender.com',
  timeout: 100000, 
  headers: {
    'Content-Type': 'application/json',
  }
});


export default foodApiInstance;
