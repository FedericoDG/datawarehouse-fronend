import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Private from './Private';
import PrivateRoutes from './PrivateRoutes';
import Public from './Public';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        element={
          <PublicRoutes>
            <Public />
          </PublicRoutes>
        }
        path='/*'
      />
      <Route
        element={
          <PrivateRoutes>
            <Private />
          </PrivateRoutes>
        }
        path='/dashboard/*'
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
