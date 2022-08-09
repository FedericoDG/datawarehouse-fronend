import { Grid } from '@mui/material';

import ButtonGroup from '../ui/ButtonGroup';
import Layout from '../ui/Layout';
import Spinner from '../ui/Spinner';

const Loader = ({ height, title, noButton }) => (
  <Layout>
    <Grid container alignItems='center' justifyContent='space-between' my={2} spacing={2}>
      {!noButton && (
        <>
          <Grid item />
          <Grid item>
            <ButtonGroup title={title} />
          </Grid>
        </>
      )}
    </Grid>
    <Spinner height={height} />;
  </Layout>
);

export default Loader;
