import api from './api';
import getConfig from './headerService';

export async function listAll(token) {
  const response = await api.get('/orders', getConfig(token));

  return response.data;
}
