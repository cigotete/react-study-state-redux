import { useSelector, useDispatch } from "react-redux"
import { increment } from './store/slices/counter'

export function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch( increment() )
  }

  return (
    <>
      { counter }
      <button type="button" onClick={ handleClick }>
        Increment
      </button>
    </>
  )
}