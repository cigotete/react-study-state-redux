import axios from 'axios';

export const booksApi = axios.create({
    baseURL: 'https://gutendex.com/books/',
    headers: {
        'Content-Type': 'application/json',
    },
});