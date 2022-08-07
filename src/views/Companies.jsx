import { Grid } from '@mui/material';

import ButtonGroup from '../components/ui/ButtonGroup';
import Error from '../components/ui/Error';
import Layout from '../components/ui/Layout';
import ModalCompanies from '../components/companies/Modal';
import Spinner from '../components/ui/Spinner';
import Table from '../components/companies/Table';
import useCompanies from '../hooks/useCompanies';

const Companies = () => {
  const {
    activeData,
    setActiveData,
    open,
    companies,
    isError,
    isLoading,
    handleOpen,
    handleClose,
    handleAddCompany,
    handleEditCompany,
    handleDeleteCompany
  } = useCompanies();

  if (isLoading) {
    return (
      <Layout>
        <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
          <Grid item>
            <ButtonGroup contacts={companies} handleOpen={handleOpen} title='Agregar Contacto' />
          </Grid>
        </Grid>
        <Spinner height={673} />;
      </Layout>
    );
  }

  if (isError) {
    return <Error height={737} />;
  }

  return (
    <Layout>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <ButtonGroup contacts={companies} handleOpen={handleOpen} title='Agregar Compañía' />
        </Grid>
      </Grid>
      <Table handleDeleteCompany={handleDeleteCompany} handleOpen={handleOpen} rows={companies} setActiveData={setActiveData} />
      {open && (
        <ModalCompanies
          activeData={activeData}
          handleAddCompany={handleAddCompany}
          handleClose={handleClose}
          handleEditCompany={handleEditCompany}
          open={open}
        />
      )}
    </Layout>
  );
};

export default Companies;
