import { CreateSessionResponse } from '../api/authAPI/types';

export type UserDataType = {
  data: CreateSessionResponse;
  password: string;
};