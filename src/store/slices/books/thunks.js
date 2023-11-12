import { setBooks, startLoadingBooks } from './booksListSlice';

export const fetchBooks = ( page = 1 ) => {
    return async ( dispatch, getState ) => {
        dispatch(startLoadingBooks());
        const response = await fetch(`https://gutendex.com/books/?page=${page}`);
        const books = await response.json();
        console.log(books.results);
        dispatch(setBooks(
            {
                page: page + 1,
                books: books.results,
            }
        ));
    }
}