import { postRequest } from './httpRequest';
import localStorage from '../utils/localStorage';
import { notification } from '../utils/notification';

const login = async (email, password) => {
  try {
    const data = await postRequest('/users/login', { email, password });

    localStorage.write('logged', true);
    localStorage.write('loading', false);
    localStorage.write('user', data.user);
    localStorage.write('token', data.token);

    notification('info', `Hola ${data.user.name} 😀`);

    return data;
  } catch (error) {
    notification('error', error.response.data.message + ' 😪');
    throw new Error(error);
  }
};

const logout = () => window.localStorage.clear();

const auth = {
  login,
  logout
};

export default auth;
