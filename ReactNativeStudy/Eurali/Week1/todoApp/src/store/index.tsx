import {configureStore} from '@reduxjs/toolkit';
import colorSlice from './colorSlice';

const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
