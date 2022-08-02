import { Navigate, Routes, Route } from 'react-router-dom';
import Company from '../views/Company';

import Contacts from '../views/Contacts';
import Regions from '../views/Regions';
import Users from '../views/Users';

const Private = () => (
  <Routes>
    <Route element={<Contacts />} path='/contactos' />
    <Route element={<Company />} path='/companias' />
    <Route element={<Regions />} path='/regiones' />
    <Route element={<Users />} path='/usuarios' />
    <Route path='/*' element={<Navigate to='/dashboard/contactos' replace />} />
  </Routes>
);

export default Private;
