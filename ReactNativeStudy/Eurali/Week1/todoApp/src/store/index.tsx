import {configureStore} from '@reduxjs/toolkit';
import colorSlice from './colorSlice';
import itemSlice from './itemSlice';
import textSlice from './textSlice';

const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
    item: itemSlice.reducer,
    text: textSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
