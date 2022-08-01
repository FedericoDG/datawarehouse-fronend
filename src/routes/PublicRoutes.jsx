import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const user = { logged: false };

  return user?.logged ? <Navigate to='/dashboard' /> : children;
};

export default PublicRoutes;
