import { Grid } from '@mui/material';
import ButtonGroup from '../ui/ButtonGroup';
import MuiCard from '../ui/Card';

const CardContainer = ({ type, titleButton, activeData, handleOpen, array, handleDelete }) => (
  <>
    <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
      <Grid item>
        <ButtonGroup activeData={activeData} handleOpen={handleOpen} title={titleButton} csv={false} />
      </Grid>
    </Grid>
    <Grid container alignItems='center' justifyContent='flex-start' spacing={1} sx={{ overflow: 'auto' }}>
      {array &&
        array.map((region) => {
          if (region.parent) {
            return (
              <Grid item key={region.id}>
                <MuiCard
                  title={region.name}
                  subtitle={region.parent}
                  type={type}
                  data={region}
                  handleOpen={() => handleOpen(region)}
                  handleDelete={handleDelete}
                />
              </Grid>
            );
          }
          return (
            <Grid item key={region.id}>
              <MuiCard title={region.name} type={type} data={region} handleOpen={() => handleOpen(region)} handleDelete={handleDelete} />
            </Grid>
          );
        })}
    </Grid>
  </>
);

export default CardContainer;
