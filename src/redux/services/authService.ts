import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setLogIn } from '../slices/authSlice';
import { authAPI } from '../api/authAPI/api';

// todo remove any blyat

export const getSessionData = createAsyncThunk('auth/getSession', async ({ email, password }: any, { dispatch, rejectWithValue }) => {
  if (email !== '' && password !== '') {
    const response = await authAPI.getSession(email, password);
    if (response.isSuccess) {
      console.log(response)
      dispatch(setLogIn({ email, password }));
      return {...response.data, password};
    } else {
      return rejectWithValue(`${response.message}`);
    }
  } else {
    toast.error('Заполните знчения Email и Password');
  }
});
