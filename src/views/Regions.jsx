import { Grid } from '@mui/material';

import ButtonGroup from '../components/ui/ButtonGroup';
import Card from '../components/ui/Card';
import Error from '../components/ui/Error';
import Layout from '../components/ui/Layout';
import ModalCities from '../components/regions/ModalCities';
import Spinner from '../components/ui/Spinner';
import useRegions from '../hooks/useRegions';

const Regions = () => {
  const {
    handleClose,

    activeDataRegion,
    regions,
    isErrorRegions,
    isLoadingRegions,
    handleAddRegion,
    handleEditRegion,
    handleDeleteRegion,
    openRegions,
    handleOpenRegions,

    activeDataCountry,
    countries,
    isErrorCountries,
    isLoadingCountries,
    handleAddCountry,
    handleEditCountry,
    handleDeleteCountry,
    openCountries,
    handleOpenCountries,

    activeDataCity,
    cities,
    isErrorCities,
    isLoadingCities,
    handleAddCity,
    handleEditCity,
    handleDeleteCity,
    openCities,
    handleOpenCities
  } = useRegions();

  if (isLoadingRegions || isLoadingCountries || isLoadingCities) {
    return (
      <Layout>
        <Spinner height={737} />;
      </Layout>
    );
  }

  if (isErrorRegions || isErrorCountries || isErrorCities) {
    return <Error height={737} />;
  }

  return (
    <Layout>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <ButtonGroup handleOpen={handleOpenRegions} title='Agregar Región' csv={false} />
        </Grid>
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-start' spacing={1} sx={{ height: 116, overflow: 'auto' }}>
        {regions &&
          regions.map((region) => (
            <Grid item key={region.id_region}>
              <Card title={region.name} type='region' />
            </Grid>
          ))}
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <ButtonGroup handleOpen={handleAddCountry} title='Agregar País' csv={false} />
        </Grid>
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-start' spacing={1} sx={{ height: 116, overflow: 'auto' }}>
        {countries &&
          countries.map((country) => (
            <Grid item key={country.id_country}>
              <Card title={country.name} subtitle={country.name_region} type='country' />
            </Grid>
          ))}
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <ButtonGroup handleOpen={handleOpenCities} title='Agregar Ciudad' csv={false} />
        </Grid>
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-start' spacing={1} sx={{ height: 116, overflow: 'auto' }}>
        {cities &&
          cities.map((city) => (
            <Grid item key={city.id_city}>
              <Card title={city.name} subtitle={city.name_country} type='city' handleOpen={() => handleOpenCities(city)} />
            </Grid>
          ))}
      </Grid>

      {openCities && (
        <ModalCities
          activeData={activeDataCity}
          handleAddCity={handleAddCity}
          handleClose={handleClose}
          handleEditCity={handleEditCity}
          open={openCities}
          countries={countries}
        />
      )}
    </Layout>
  );
};

export default Regions;
