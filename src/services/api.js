import axios from 'axios';

const data = JSON.parse(sessionStorage.getItem('user'));

const { token } = data || '';

const api= axios.create({ 
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${token}`
  },
});

export default api;