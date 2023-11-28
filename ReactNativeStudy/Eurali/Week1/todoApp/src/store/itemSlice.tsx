import {createSlice} from '@reduxjs/toolkit';

type ItemState = {
  title: string;
  completed: boolean;
};

type InitialState = {
  todoItems: ItemState[];
};

const initialState: InitialState = {
  todoItems: [],
};
const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    itemAdd: (state, action) => {
      state.todoItems.push(action.payload);
    },
    itemComplete: (state, action) => {
      const itemToComplete = state.todoItems.find(
        item => item.title === action.payload.title,
      );
      if (itemToComplete) {
        itemToComplete.completed = true;
      }
    },
    itemDelete: (state, action) => {
      state.todoItems = state.todoItems.filter(
        item => item.title !== action.payload.title,
      );
    },
  },
});

export default itemSlice;
export const {itemAdd, itemComplete, itemDelete} = itemSlice.actions;
