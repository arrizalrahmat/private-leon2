import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menu.reducer';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
