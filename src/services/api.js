import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://us-central1-aprende-konecta.cloudfunctions.net',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('login_data')
      ? JSON.parse(localStorage.getItem('login_data')).accessToken
      : null;
    const configHeader = { Headers: { Authorization: token, 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' } };

    const modifiedConfig = {
      ...config,
      configHeader,
    };
    return modifiedConfig;
  },
  (error) => Promise.reject(error),
);

export default api;
