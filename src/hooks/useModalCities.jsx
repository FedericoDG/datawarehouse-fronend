import { useForm } from 'react-hook-form';

const useModalCities = ({ activeData, handleEditCity, handleAddCity, handleClose }) => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    if (activeData.id) {
      handleEditCity(data);
    } else {
      handleAddCity(data);
    }
    handleClose();
  };

  return {
    handleSubmit,
    errors,
    register,
    onSubmit
  };
};

export default useModalCities;
