import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ children }) => {
  const { auth } = useSelector((state) => state);

  return auth?.logged ? children : <Navigate to='/' />;
};

export default PrivateRoutes;
