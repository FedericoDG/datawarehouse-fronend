import { Grid } from '@mui/material';

import ButtonGroup from '../components/ui/ButtonGroup';
import Error from '../components/ui/Error';
import Layout from '../components/ui/Layout';
import Loader from '../components/contacts/Loader';
import ModalContacts from '../components/contacts/Modal';
import Search from '../components/contacts/Search';
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
    handleSubmit
  } = useContacts();

  if (isLoading) return <Loader height={510} title='agregar contacto' />;

  if (isError) return <Error height={645} />;

  return (
    <Layout>
      <Grid container alignItems='center' justifyContent='space-between' my={2} spacing={2}>
        <Grid item>
          <Search handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
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
