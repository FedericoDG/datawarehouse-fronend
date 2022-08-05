import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoutes = ({ children }) => {
  const { auth } = useSelector((state) => state);

  return auth?.logged ? <Navigate to='/dashboard/contactos' /> : children;
};

export default PublicRoutes;
