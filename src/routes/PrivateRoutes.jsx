import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const user = { logged: false };

  return user?.logged ? children : <Navigate to='/' />;
};

export default PrivateRoutes;
