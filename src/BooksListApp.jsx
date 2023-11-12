import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./store/slices/books";
import { Space, Typography, List, Button } from 'antd';

const { Text, Title } = Typography;

export const BooksListApp = () => {

  const dispatch = useDispatch();
  const { books = [], page, isLoading } = useSelector(state => state.booksList);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <Space direction="vertical">
      <Title>Books List</Title>
      <Text>Loading { isLoading ? 'true' : 'false' } </Text>
      <Button disabled={ isLoading } type="primary" onClick={ () => dispatch(fetchBooks(page)) }>
        Next</Button>
      <List
        bordered
        dataSource={ books }
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item.title}</Typography.Text>
          </List.Item>
        )}
      />

      </Space>
    </>
  );
}