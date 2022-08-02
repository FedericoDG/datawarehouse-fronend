import { Container } from '@mui/material';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ paddingTop: 1 }} maxWidth='lg'>
        {children}
      </Container>
    </>
  );
};

export default Layout;
