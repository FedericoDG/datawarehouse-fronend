import { useForm } from 'react-hook-form';

import { notification } from '../utils/notification';

const useModalCities = ({ activeData, handleEditCity, handleAddCity, handleClose }) => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    let message;
    if (activeData.id) {
      handleEditCity(data);
      message = 'Ciudad editada con éxito';
    } else {
      handleAddCity(data);
      message = 'Ciudad creada con éxito';
    }
    handleClose();
    notification('success', message);
  };

  return {
    handleSubmit,
    errors,
    register,
    onSubmit
  };
};

export default useModalCities;
