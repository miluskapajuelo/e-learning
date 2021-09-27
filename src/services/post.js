import { api } from './api';

const getToken = async (body) => {
  try {
    const resp = await api.post('/auth', body);
    return resp;
  } catch {
    console.log('error');
    return false;
  }
};

export default getToken;
