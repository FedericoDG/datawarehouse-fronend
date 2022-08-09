import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoutes = ({ children }) => {
  const { auth } = useSelector((state) => state);

  return auth?.user?.role === 'ADMIN' ? children : <Navigate to='/dashboard/contactos' />;
};

export default AdminRoutes;
