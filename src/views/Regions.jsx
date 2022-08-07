import { Grid } from '@mui/material';

import ButtonGroup from '../components/ui/ButtonGroup';
import Card from '../components/ui/Card';
import Error from '../components/ui/Error';
import Layout from '../components/ui/Layout';
import Loader from '../components/contacts/Loader';
import ModalCities from '../components/regions/ModalCities';
import ModalCountries from '../components/regions/ModalCountries';
import ModalRegions from '../components/regions/ModalRegions';
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

  if (isLoadingRegions || isLoadingCountries || isLoadingCities) return <Loader height={510} />;

  if (isErrorRegions || isErrorCountries || isErrorCities) return <Error height={645} />;

  return (
    <Layout>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <ButtonGroup activeData={activeDataRegion} handleOpen={handleOpenRegions} title='Agregar Región' csv={false} />
        </Grid>
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-start' spacing={1} sx={{ height: 116, overflow: 'auto' }}>
        {regions &&
          regions.map((region) => (
            <Grid item key={region.id_region}>
              <Card
                title={region.name}
                type='region'
                data={region}
                handleOpen={() => handleOpenRegions(region)}
                handleDelete={handleDeleteRegion}
              />
            </Grid>
          ))}
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <ButtonGroup activeData={activeDataCountry} handleOpen={handleOpenCountries} title='Agregar País' csv={false} />
        </Grid>
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-start' spacing={1} sx={{ height: 116, overflow: 'auto' }}>
        {countries &&
          countries.map((country) => (
            <Grid item key={country.id_country}>
              <Card
                title={country.name}
                subtitle={country.name_region}
                type='country'
                data={country}
                handleOpen={() => handleOpenCountries(country)}
                handleDelete={handleDeleteCountry}
              />
            </Grid>
          ))}
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <ButtonGroup activeData={activeDataCity} handleOpen={handleOpenCities} title='Agregar Ciudad' csv={false} />
        </Grid>
      </Grid>
      <Grid container alignItems='center' justifyContent='flex-start' spacing={1} sx={{ height: 116, overflow: 'auto' }}>
        {cities &&
          cities.map((city) => (
            <Grid item key={city.id_city}>
              <Card
                title={city.name}
                subtitle={city.name_country}
                type='city'
                data={city}
                handleOpen={() => handleOpenCities(city)}
                handleDelete={handleDeleteCity}
              />
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
      {openCountries && (
        <ModalCountries
          activeData={activeDataCountry}
          handleAddCountry={handleAddCountry}
          handleClose={handleClose}
          handleEditCountry={handleEditCountry}
          open={openCountries}
          regions={regions}
        />
      )}
      {openRegions && (
        <ModalRegions
          activeData={activeDataRegion}
          handleAddRegion={handleAddRegion}
          handleClose={handleClose}
          handleEditRegion={handleEditRegion}
          open={openRegions}
          regions={regions}
        />
      )}
    </Layout>
  );
};

export default Regions;
