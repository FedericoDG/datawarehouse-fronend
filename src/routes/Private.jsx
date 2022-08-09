import { Routes, Route } from 'react-router-dom';
import Companies from '../views/Companies';
import Error404 from '../views/404';

import AdminRoutes from './AdminRoutes';
import Contacts from '../views/Contacts';
import Regions from '../views/Regions';
import Users from '../views/Users';

const Private = () => (
  <Routes>
    <Route element={<Contacts />} path='/contactos' />
    <Route element={<Companies />} path='/companias' />
    <Route element={<Regions />} path='/regiones' />
    <Route
      element={
        <AdminRoutes>
          <Users />
        </AdminRoutes>
      }
      path='/usuarios'
    />
    <Route element={<Error404 />} path='/*' />
  </Routes>
);

export default Private;
