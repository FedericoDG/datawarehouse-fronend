import { useForm } from 'react-hook-form';

const useModalRegions = ({ activeData, handleEditRegion, handleAddRegion, handleClose }) => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    if (activeData.id) {
      handleEditRegion(data);
    } else {
      handleAddRegion(data);
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

export default useModalRegions;
