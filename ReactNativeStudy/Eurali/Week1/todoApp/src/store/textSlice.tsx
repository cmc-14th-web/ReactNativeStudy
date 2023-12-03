import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  text: string;
};

const initialState: InitialState = {
  text: '',
};
const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    textChange: (state, action) => {
      state.text = action.payload;
    },
  },
});

export default textSlice;
export const {textChange} = textSlice.actions;
