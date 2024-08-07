import { createAsyncThunk } from '@reduxjs/toolkit';
import { objectsAPI } from '../api/objectsAPI/api';

export const getObjectsData = createAsyncThunk('objects/getObjects', async (paramsString: string, { rejectWithValue }) => {  
  const response = await objectsAPI.getObjects(paramsString);
  if (response) {
    if (response.isSuccess) {
      return response.data;
    } else {
      return rejectWithValue(`${response.message}`);
    }
  }
});
