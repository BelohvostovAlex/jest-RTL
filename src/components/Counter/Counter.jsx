import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../../store/reducers/counterSlice'

export const Counter = () => {
    const dispatch = useDispatch()
    const {value} = useSelector(state => state.counter)

    const incrementHandler = () => {
      dispatch(increment())
    }
    const decrementHandler = () => {
      dispatch(decrement())
    }

  return (
    <div>
        <h1 data-testid="value-title">{value}</h1>
        <button data-testid="increment-btn" onClick={incrementHandler}>Increment</button>
        <button data-testid="decrement-btn" onClick={decrementHandler}>Decrement</button>
    </div>
  )
}
