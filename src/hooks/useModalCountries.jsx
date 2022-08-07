import { useForm } from 'react-hook-form';

import { notification } from '../utils/notification';

const useModalCountries = ({ activeData, handleEditCountry, handleAddCountry, handleClose }) => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    let message;
    if (activeData.id) {
      handleEditCountry(data);
      message = 'País editado con éxito';
    } else {
      handleAddCountry(data);
      message = 'País creado con éxito';
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

export default useModalCountries;
