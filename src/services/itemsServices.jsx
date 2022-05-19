import api from './api';
import getConfig from './headerService';

export async function listAll(token) {
  const response = await api.get('/items', getConfig(token));

  return response.data;
}

export async function listOne(id, token) {
  const response = await api.get(`/items/${id}`, getConfig(token));

  return response.data;
}

export async function insertOne(data, token) {
  const response = await api.post('/items/new', data, getConfig(token));

  return response.data;
}

export async function deleteOne(id, token) {
  const response = await api.delete(`/items/${id}`, getConfig(token));

  return response.data;
}

export async function updateOne(id, data, token) {
  const response = await api.put(`/items/${id}`, data, getConfig(token));

  return response.data;
}
