import { useState } from 'react';
import { useAddContactMutation, useDeteleContactMutation, useEditContactMutation, useGetContactsQuery } from '../app/api';

import { notification } from '../utils/notification';
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
    const message = 'Contacto creado con éxito';
    const result = await addContact(contact);
    if ('error' in result) {
      console.log(result);
      notification('error', result.error.data.message);
    } else {
      notification('success', message);
    }
  };

  const handleEditContact = async (contact) => {
    const message = 'Contacto editado con éxito';
    const result = await editContact(contact);
    if ('error' in result) {
      console.log(result);
      notification('error', result.error.data.message);
    } else {
      notification('success', message);
    }
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
