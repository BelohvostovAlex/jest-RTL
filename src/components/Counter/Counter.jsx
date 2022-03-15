import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state)
  return (
    <div>
        kek
    </div>
  )
}
