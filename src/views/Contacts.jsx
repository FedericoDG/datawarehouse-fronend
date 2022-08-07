import { Grid } from '@mui/material';

import ButtonGroup from '../components/ui/ButtonGroup';
import Error from '../components/ui/Error';
import Layout from '../components/ui/Layout';
import ModalContacts from '../components/contacts/Modal';
import Search from '../components/contacts/Search';
import Spinner from '../components/ui/Spinner';
import Table from '../components/contacts/Table';
import useContacts from '../hooks/useContacts';

const Contacts = () => {
  const {
    activeData,
    setActiveData,
    open,
    search,
    setSearch,
    contacts,
    isError,
    isLoading,
    handleOpen,
    handleClose,
    handleAddContact,
    handleEditContact,
    handleDeleteContact,
    handleSubmit,
    handleReset
  } = useContacts();

  if (isLoading) {
    return (
      <Layout>
        <Grid container alignItems='center' justifyContent='space-between' my={2} spacing={2}>
          <Grid item>
            <Search handleReset={handleReset} handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
          </Grid>
          <Grid item>
            <ButtonGroup contacts={contacts} handleOpen={handleOpen} title='Agregar Contacto' />
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
      <Grid container alignItems='center' justifyContent='space-between' my={2} spacing={2}>
        <Grid item>
          <Search handleReset={handleReset} handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
        </Grid>
        <Grid item>
          <ButtonGroup contacts={contacts} handleOpen={handleOpen} title='Agregar Contacto' />
        </Grid>
      </Grid>
      <Table handleDeleteContact={handleDeleteContact} handleOpen={handleOpen} rows={contacts} setActiveData={setActiveData} />
      {open && (
        <ModalContacts
          activeData={activeData}
          handleAddContact={handleAddContact}
          handleClose={handleClose}
          handleEditContact={handleEditContact}
          open={open}
        />
      )}
    </Layout>
  );
};

export default Contacts;
