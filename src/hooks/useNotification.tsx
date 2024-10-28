import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useNotification = () => {
  const notify = (message: string) => {
    toast(message);
  };

  return { notify };
};
