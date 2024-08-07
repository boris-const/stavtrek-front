import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ObjectDataType } from '../api/objectsAPI/types';
import { getObjectsData } from '../services/objectsService';

enum SliceStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface objectsState {
  objects: ObjectDataType[];
  status: SliceStatus;
}

const initialState: objectsState = {
  objects: [] as ObjectDataType[],
  status: SliceStatus.IDLE,
};

export const objectsSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getObjectsData.pending, (state) => {        
        state.status = SliceStatus.LOADING;
      })
      .addCase(getObjectsData.fulfilled, (state, action) => {
        if (action.payload) {
          state.objects = action.payload;        
        } else {
          toast.error(`${action.payload}`);
        }
        state.status = SliceStatus.IDLE;
      })
      .addCase(getObjectsData.rejected, (state, action) => {
        toast.error(JSON.stringify(action.payload));
        state.status = SliceStatus.FAILED;
      });
  },
});

export default objectsSlice.reducer;
