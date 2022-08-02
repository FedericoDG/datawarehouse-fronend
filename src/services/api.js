import { postRequest } from '../services/httpRequest';
import localStorage from '../utils/localStorage';

const login = async (email, password) => {
  try {
    const data = await postRequest('/users/login', { email, password });

    localStorage.write('logged', true);
    localStorage.write('loading', false);
    localStorage.write('user', data.user);
    localStorage.write('token', data.token);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const api = {
  login
};

export default api;
