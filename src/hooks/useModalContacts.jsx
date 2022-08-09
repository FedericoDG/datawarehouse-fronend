import { useForm } from 'react-hook-form';
import { useState } from 'react';

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
    if (activeData.id) {
      handleEditContact(data);
    } else {
      handleAddContact(data);
    }
    handleClose();
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
