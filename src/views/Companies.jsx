import { Grid } from '@mui/material';
import Layout from '../components/ui/Layout';
import ModalContacts from '../components/companies/Modal';
import Table from '../components/companies/Table';
import Buttons from '../components/companies/Buttons';
import Spinner from '../components/ui/Spinner';

import Error from '../components/ui/Error';
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
    return <Spinner height={737} />;
  }

  if (isError) {
    return <Error height={737} />;
  }

  return (
    <Layout>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <Buttons contacts={companies} handleOpen={handleOpen} />
        </Grid>
      </Grid>
      <Table handleDeleteCompany={handleDeleteCompany} handleOpen={handleOpen} rows={companies} setActiveData={setActiveData} />
      {open && (
        <ModalContacts
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
