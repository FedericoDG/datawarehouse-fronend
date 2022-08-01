import { Routes, Route } from 'react-router-dom';

import Login from '../views/Login';

const Public = () => (
  <Routes>
    <Route element={<Login />} path='/' />
  </Routes>
);

export default Public;
