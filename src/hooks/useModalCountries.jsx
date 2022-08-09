import { useForm } from 'react-hook-form';

const useModalCountries = ({ activeData, handleEditCountry, handleAddCountry, handleClose }) => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    if (activeData.id) {
      handleEditCountry(data);
    } else {
      handleAddCountry(data);
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

export default useModalCountries;
