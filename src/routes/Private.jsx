import { Routes, Route } from 'react-router-dom';

import Dashboard from '../views/Dashboard';

const Private = () => (
  <Routes>
    <Route element={<Dashboard />} path='/' />
  </Routes>
);

export default Private;
