import { useForm } from 'react-hook-form';

import { useGetCitiesQuery } from '../app/api';

const useModalUsers = ({ activeData, handleAddUser, handleEditUser, handleClose }) => {
  const { data: cities, isLoading: isLoadingCities } = useGetCitiesQuery();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = async (data) => {
    if (activeData.id) {
      if (data.password) {
        handleEditUser(data);
      } else {
        const { password, ...rest } = data;
        handleEditUser(rest);
      }
    } else {
      handleAddUser(data);
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

export default useModalUsers;
