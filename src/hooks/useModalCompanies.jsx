import { useForm } from 'react-hook-form';

import { useGetCitiesQuery } from '../app/api';

const useModalCompany = ({ activeData, handleEditCompany, handleAddCompany, handleClose }) => {
  const { data: cities, isLoading: isLoadingCities } = useGetCitiesQuery();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    if (activeData.id) {
      handleEditCompany(data);
    } else {
      handleAddCompany(data);
    }
    handleClose();
  };

  return {
    cities,
    isLoadingCities,
    handleSubmit,
    errors,
    register,
    onSubmit
  };
};

export default useModalCompany;
