import { useSelector, useDispatch } from "react-redux"
import { increment, incrementBy, decrement } from './store/slices/counter'
import { Button, Space, Typography } from 'antd'

const { Text } = Typography;

export function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleIncrementBy = (amount) => {
    dispatch(incrementBy(amount));
  }

  return (
    <>
      <Space direction="vertical">
      <Text>{ counter }</Text>
      <Button type="primary" onClick={ handleIncrement }>
        Increment
      </Button>
      <Button type="primary" onClick={ handleDecrement }>
        Decrement
      </Button>
      <Button type="primary" onClick={ () => handleIncrementBy(2) }>
        Increment By
      </Button>
      </Space>
    </>
  )
}