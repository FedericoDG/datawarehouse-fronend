import { Container } from '@mui/material';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ paddingTop: 1 }} maxWidth='xl'>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
