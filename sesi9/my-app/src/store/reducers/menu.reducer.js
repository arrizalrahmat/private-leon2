import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/menu';
const initialState = {
  menuList: [],
  isLoading: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getMenu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenu.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error);
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        state.menuList = action.payload;
        state.isLoading = false;
      }),
});

export default menuSlice.reducer;

export const getMenu = createAsyncThunk(
  '/menu/getMenu',
  async (category) => {
    try {
      const response = await axios.get(url, {
        params: category ? { category } : {},
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
