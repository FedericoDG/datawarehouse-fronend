import { Grid } from '@mui/material';
import Layout from '../components/ui/Layout';
import ModalContacts from '../components/contacts/Modal';
import Search from '../components/contacts/Seach';
import Table from '../components/contacts/Table';
import Buttons from '../components/contacts/Buttons';
import Spinner from '../components/ui/Spinner';

import Error from '../components/ui/Error';
import useContects from '../hooks/useContacts';

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
  } = useContects();

  if (isLoading) {
    return <Spinner height={737} />;
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
          <Buttons contacts={contacts} handleOpen={handleOpen} />
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
