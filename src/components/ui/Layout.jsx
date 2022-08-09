import { Container } from '@mui/material';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Container sx={{ paddingTop: 10 }} maxWidth='xl'>
      {children}
    </Container>
    <Footer fullwidth />
  </>
);

export default Layout;
