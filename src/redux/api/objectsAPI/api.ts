import { toast } from 'react-toastify';
import { API } from '../index';
import { ObjectDataType } from './types';

const PATHS = {
  OBJECTS: '/api/devices',
};

export const objectsAPI = {
  getObjects: async (selectedId?: string) => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (email && password) {
      return await API.get<ObjectDataType[]>({
        url: `${PATHS.OBJECTS}${selectedId !== '' ? '?' + selectedId : ''}`,
        auth: {
          username: email,
          password: password,
        },
      });
    } else {
      toast.error('Не удалось выполнить запрос Err objectsAPI');
    }
  },
};
