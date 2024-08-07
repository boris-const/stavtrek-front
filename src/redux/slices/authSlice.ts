import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSessionData } from '../services/authService';
import { toast } from 'react-toastify';
import { CreateSessionResponse } from '../api/authAPI/types';

// export type getDataProps = { IdInstance: string; ApiTokenInstance: string };

export type UserLoginData = {
  email: string;
  password: string;
};

enum SliceStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface authState {
  isAuth: boolean;
  userData: CreateSessionResponse;
  status: SliceStatus;
}

const initialState: authState = {
  isAuth: false,
  userData: {} as CreateSessionResponse,
  status: SliceStatus.IDLE,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogIn: (state, { payload }: PayloadAction<UserLoginData>) => {
      localStorage.setItem('email', payload.email);
      localStorage.setItem('password', payload.password);
      state.isAuth = true;
    },
    setLogOut: (state) => {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSessionData.pending, (state) => {
        state.status = SliceStatus.LOADING;
      })
      .addCase(getSessionData.fulfilled, (state, action) => {
        if (action.payload) {          
          state.userData = action.payload;
        } else {
          toast.error(`${action.payload}`);
        }
        state.status = SliceStatus.IDLE;
      })
      .addCase(getSessionData.rejected, (state, action) => {
        toast.error(JSON.stringify(action.payload));
        state.status = SliceStatus.FAILED;
      });
  },
});

export const { setLogIn, setLogOut } = authSlice.actions;

export default authSlice.reducer;
