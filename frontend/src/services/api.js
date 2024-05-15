import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'auth/signup', {
    username,
    email,
    password
  });
};

const login = (email, password) => {
  return axios.post(API_URL + 'auth/signin', {
    email,
    password
  }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const getTransactions = () => {
  return axios.get(API_URL + 'transactions', {
    headers: { 'x-access-token': JSON.parse(localStorage.getItem('user')).accessToken }
  });
};

export default {
  register,
  login,
  getTransactions
};
