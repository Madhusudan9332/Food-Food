import axios from 'axios';

const randomImageInstance = axios.create({
  baseURL: 'https://foodish-api.com/api/',
  timeout: 100000, 
  headers: {
    'Content-Type': 'application/json',
  }
});


export default randomImageInstance;