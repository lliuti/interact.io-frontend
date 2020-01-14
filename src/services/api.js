import axios from 'axios';

const data = JSON.parse(localStorage.getItem('user'));
const { token } = data;
// console.log(token);

const api= axios.create({ 
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default api;