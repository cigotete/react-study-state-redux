import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./store/slices/books";

export const BooksListApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      qwe
    </>
  );
}