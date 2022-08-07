import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { notification } from '../utils/notification';
import { useGetCitiesQuery, useGetCompaniesQuery } from '../app/api';

const useModalContacts = ({ activeData, handleEditContact, handleAddContact, handleClose }) => {
  const [lastname, setLastname] = useState(activeData.lastname.at(0));
  const [name, setName] = useState(activeData.name.at(0));

  const { data: cities, isLoading: isLoadingCities } = useGetCitiesQuery();
  const { data: companies, isLoading: isLoadingCompanies } = useGetCompaniesQuery();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    let message;
    if (activeData.id) {
      handleEditContact(data);
      message = 'Contacto editado con éxito';
    } else {
      handleAddContact(data);
      message = 'Contacto creado con éxito';
    }
    handleClose();
    notification('success', message);
  };

  return {
    lastname,
    setLastname,
    name,
    setName,
    cities,
    isLoadingCities,
    companies,
    isLoadingCompanies,
    handleSubmit,
    errors,
    register,
    onSubmit
  };
};

export default useModalContacts;
