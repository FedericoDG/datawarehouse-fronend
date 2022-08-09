import { useForm } from 'react-hook-form';

import { notification } from '../utils/notification';
import { useGetCitiesQuery } from '../app/api';

const useModalUsers = ({ activeData, handleAddUser, handleEditUser, handleClose }) => {
  const { data: cities, isLoading: isLoadingCities } = useGetCitiesQuery();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    let message;
    if (activeData.id) {
      if (data.password) {
        handleEditUser(data);
      } else {
        const { password, ...rest } = data;
        handleEditUser(rest);
      }
      message = 'Usuario editado con éxito';
    } else {
      handleAddUser(data);
      message = 'Usuario creado con éxito';
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

export default useModalUsers;
