import api from './api';
import getConfig from './headerService';

export async function listAll(token) {
  const response = await api.get('/items', getConfig(token));

  return response.data;
}

export async function listOne(id) {
  const response = await api.get(`/items/${id}`);

  return response.data;
}
