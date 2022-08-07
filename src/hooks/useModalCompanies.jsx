import { useForm } from 'react-hook-form';

import { notification } from '../utils/notification';
import { useGetCitiesQuery } from '../app/api';

const useModalCompany = ({ activeData, handleEditCompany, handleAddCompany, handleClose }) => {
  const { data: cities, isLoading: isLoadingCities } = useGetCitiesQuery();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    let message;
    if (activeData.id) {
      handleEditCompany(data);
      message = 'Compañía editada con éxito';
    } else {
      handleAddCompany(data);
      message = 'Compañia creada con éxito';
    }
    handleClose();
    notification('success', message);
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
