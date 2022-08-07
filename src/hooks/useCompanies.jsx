import { useState } from 'react';
import { useAddCompanyMutation, useDeteleCompanyMutation, useEditCompanyMutation, useGetCompaniesQuery } from '../app/api';

import defaultCompany from '../constants/defaultCompany';

const useCompanies = () => {
  const [activeData, setActiveData] = useState(defaultCompany);
  const [open, setOpen] = useState(false);

  const { data: companies, isError, isLoading } = useGetCompaniesQuery();
  const [addCompany] = useAddCompanyMutation();
  const [editCompany] = useEditCompanyMutation();
  const [deleteCompany] = useDeteleCompanyMutation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveData(defaultCompany);
  };

  const handleAddCompany = async (company) => {
    await addCompany(company);
  };

  const handleEditCompany = async (company) => {
    await editCompany(company);
  };

  const handleDeleteCompany = async (id) => {
    await deleteCompany(id);
  };

  return {
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
  };
};

export default useCompanies;
