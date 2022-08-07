import { Grid } from '@mui/material';

import ButtonGroup from '../ui/ButtonGroup';
import Layout from '../ui/Layout';
import Search from './Search';
import Spinner from '../ui/Spinner';

const Loader = ({ height }) => (
  <Layout>
    <Grid container alignItems='center' justifyContent='space-between' my={2} spacing={2}>
      <Grid item>
        <Search />
      </Grid>
      <Grid item>
        <ButtonGroup title='Agregar Contacto' />
      </Grid>
    </Grid>
    <Spinner height={height} />;
  </Layout>
);

export default Loader;
