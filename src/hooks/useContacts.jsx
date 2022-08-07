import { useState } from 'react';
import { useAddContactMutation, useDeteleContactMutation, useEditContactMutation, useGetContactsQuery } from '../app/api';

import defaultContact from '../constants/defaultContact';

const useContacts = () => {
  const [activeData, setActiveData] = useState(defaultContact);
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);

  const { data: contacts, isError, isLoading } = useGetContactsQuery(filter);
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

  const handleSubmit = (search) => {
    setFilter(search);
  };

  return {
    activeData,
    setActiveData,
    open,
    contacts,
    isError,
    isLoading,
    handleOpen,
    handleClose,
    handleAddContact,
    handleEditContact,
    handleDeleteContact,
    handleSubmit
  };
};

export default useContacts;
