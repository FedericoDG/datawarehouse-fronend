import { useForm } from 'react-hook-form';

import { notification } from '../utils/notification';

const useModalRegions = ({ activeData, handleEditRegion, handleAddRegion, handleClose }) => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  const onSubmit = (data) => {
    let message;
    if (activeData.id) {
      handleEditRegion(data);
      message = 'Región editada con éxito';
    } else {
      handleAddRegion(data);
      message = 'Región creada con éxito';
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

export default useModalRegions;
