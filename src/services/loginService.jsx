import api from './api';

export default async function login(data) {
  const response = await api.post('/login', data);

  return response.data;
}
