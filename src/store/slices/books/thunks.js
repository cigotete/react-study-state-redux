import { setBooks, startLoadingBooks } from './booksListSlice';
import { booksApi } from '../../../api/booksApi';

export const fetchBooks = ( page = 1 ) => {
    return async ( dispatch, getState ) => {
        dispatch(startLoadingBooks());
        const { data } = await booksApi.get(`?page=${page}`);
        dispatch(setBooks(
            {
                page: page + 1,
                books: data.results,
            }
        ));
    }
}