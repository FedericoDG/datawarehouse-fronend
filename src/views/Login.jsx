import { useDispatch, useSelector } from 'react-redux';

import { authLogin } from '../app/authSlice';

const Login = () => {
  const { auth } = useSelector((state) => state);

  const { loading } = auth;

  const dispatch = useDispatch();

  const data = {
    email: 'admin@gmail.com',
    password: 'Password1234!'
  };
  return (
    <button onClick={() => dispatch(authLogin(data))} disabled={loading}>
      Login
    </button>
  );
};

export default Login;
