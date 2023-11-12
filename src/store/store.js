
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { booksListSlice } from './slices/books';

export const store = configureStore({
  reducer: {
      counter: counterSlice.reducer,
      booksList: booksListSlice.reducer,
  },
})