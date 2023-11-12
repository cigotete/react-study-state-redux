import { createSlice } from '@reduxjs/toolkit';

export const booksListSlice = createSlice({
    name: 'booksList',
    initialState: {
        page: 0,
        books: [],
        isLoading: false,
    },
    reducers: {
        startLoadingBooks: (state, /* Action */ ) => {
            state.isLoading = true;
        },
        setBooks: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.books = action.payload.books;

        },
    }
});


export const { startLoadingBooks, setBooks } = booksListSlice.actions;