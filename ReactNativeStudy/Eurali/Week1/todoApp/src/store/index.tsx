import {configureStore} from '@reduxjs/toolkit';
import colorSlice from './colorSlice';
import itemSlice from './itemSlice';

const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
    item: itemSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
