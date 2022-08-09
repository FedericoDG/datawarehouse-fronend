import Error from '../components/ui/Error';
import Layout from '../components/ui/Layout';
import Loader from '../components/regions/Loader';
import ModalCities from '../components/regions/ModalCities';
import ModalCountries from '../components/regions/ModalCountries';
import ModalRegions from '../components/regions/ModalRegions';
import useRegions from '../hooks/useRegions';

import './styles.css';
import CardContainer from '../components/regions/CardContainer';

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

  if (isLoadingRegions || isLoadingCountries || isLoadingCities) return <Loader height={630} noButton />;

  if (isErrorRegions || isErrorCountries || isErrorCities) return <Error height={645} />;

  return (
    <Layout>
      <CardContainer
        type='region'
        titleButton='Agregar región'
        activeData={activeDataRegion}
        handleOpen={handleOpenRegions}
        array={regions}
        handleDelete={handleDeleteRegion}
      />
      <CardContainer
        type='country'
        titleButton='Agregar país'
        activeData={activeDataCountry}
        handleOpen={handleOpenCountries}
        array={countries}
        handleDelete={handleDeleteCountry}
      />
      <div className='last-card-container'>
        <CardContainer
          type='city'
          titleButton='Agregar ciudad'
          activeData={activeDataCity}
          handleOpen={handleOpenCities}
          array={cities}
          handleDelete={handleDeleteCity}
        />
      </div>
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
