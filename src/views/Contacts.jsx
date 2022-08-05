import { Button, Divider, Grid, InputBase, Paper, TextField } from '@mui/material';
import { useAddContactMutation, useDeteleContactMutation, useEditContactMutation, useGetContactsQuery } from '../app/contactsApi';
import { useState } from 'react';

import Layout from '../components/ui/Layout';
import ModalContacts from '../components/contacts/Modal';
import Table from '../components/contacts/Table';
import Search from '../components/contacts/Seach';

const Contacts = () => {
  const defaultContact = {
    id_contact: '',
    name: '',
    lastname: '',
    email: '',
    address: '',
    phone: '',
    preference_phone: 1,
    preference_phone_name: 'sin preferencia',
    linkedin: '',
    preference_linkedin: 1,
    preference_linkedin_name: 'sin preferencia',
    facebook: '',
    preference_facebook: 1,
    preference_facebook_name: 'sin preferencia',
    twitter: '',
    preference_twitter: 1,
    preference_twitter_name: 'sin preferencia',
    instagram: '',
    preference_instagram: 1,
    preference_instagram_name: 'sin preferencia',
    position: '',
    interest: 50,
    id_company: '',
    company_name: '',
    id_city: '',
    city_name: '',
    id_country: '',
    country_name: '',
    id_region: '',
    region_name: ''
  };

  const [activeData, setActiveData] = useState(defaultContact);
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetContactsQuery(filter);
  const [addContact] = useAddContactMutation();
  const [editContact] = useEditContactMutation();
  const [deleteContact] = useDeteleContactMutation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveData(defaultContact);
  };

  const handleAddContact = async (contact) => {
    await addContact(contact);
  };

  const handleEditContact = async (contact) => {
    await editContact(contact);
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(search);
  };

  const handleReset = () => {
    setSearch('');
    setFilter('');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Grid container alignItems='center' justifyContent='space-between' my={2} spacing={2}>
        <Grid item>
          <Search handleReset={handleReset} handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
        </Grid>
        <Grid item>
          <Button size='large' variant='contained' onClick={() => handleOpen()}>
            Agregar Contacto
          </Button>
        </Grid>
      </Grid>
      <Table handleDeleteContact={handleDeleteContact} handleOpen={handleOpen} rows={data} setActiveData={setActiveData} />
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
