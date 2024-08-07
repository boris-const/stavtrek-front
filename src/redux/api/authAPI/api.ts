import { API } from '../index';
import { CreateSessionResponse } from './types';

const PATHS = {
  SESSION: '/api/session',
};

export const authAPI = {
  getSession: async (email: string, password: string) => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    return await API.post<CreateSessionResponse>({
      url: PATHS.SESSION,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: params,
    });
  },
};
