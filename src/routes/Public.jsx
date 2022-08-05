import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../views/Login';

const Public = () => (
  <Routes>
    <Route element={<Login />} path='/' />
    <Route path='/*' element={<Navigate to='/' replace />} />
  </Routes>
);

export default Public;
