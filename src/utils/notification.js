import { toast } from 'react-toastify';

export const notification = (status, message) => {
  toast[status](message, {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};
