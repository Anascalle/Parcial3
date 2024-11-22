import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Poem } from '../../types/poems';

interface PoemState {
  poems: Array<Poem>;
}

const initialState: PoemState = {
  poems: [],
};

export const poemSlice = createSlice({
  name: 'poem',
  initialState,
  reducers: {
 
    eliminatePoem: (state, action: PayloadAction<Poem>) => {
      state.poems = state.poems.filter(poem => poem.title !== action.payload.title); 
    },
  },
});

export const { eliminatePoem } = poemSlice.actions;

export default poemSlice.reducer;
