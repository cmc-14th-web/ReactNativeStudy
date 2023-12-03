import {createSlice} from '@reduxjs/toolkit';
import color from '../constants/color';

type InitialState = {
  mainColor: string;
};

const initialState: InitialState = {
  mainColor: color.orange,
};
const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    colorChange: (state, action) => {
      state.mainColor = action.payload;
    },
  },
});

export default colorSlice;
export const {colorChange} = colorSlice.actions;
