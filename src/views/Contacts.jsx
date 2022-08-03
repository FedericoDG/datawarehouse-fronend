import { useAddContactMutation, useDeteleContactMutation, useEditContactMutation, useGetContactsQuery } from '../app/contactsApi';
import Layout from '../components/ui/Layout';
import Table from '../components/contacts/Table';
import ModalContacts from '../components/contacts/Modal';
import { useState } from 'react';

const Contacts = () => {
  const [open, setOpen] = useState(false);
  const [activeData, setActiveData] = useState({});

  const { data, isLoading } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const [editContact] = useEditContactMutation();
  const [deleteContact] = useDeteleContactMutation();

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setActiveData({});
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Table handleDeleteContact={handleDeleteContact} handleOpen={handleOpen} rows={data.contacts} setActiveData={setActiveData} />
      {activeData.id && (
        <ModalContacts activeData={activeData} handleEditContact={handleEditContact} handleClose={handleClose} open={open} />
      )}
    </Layout>
  );
};

export default Contacts;
