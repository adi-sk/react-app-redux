import React from 'react'
import { useSelector } from 'react-redux'

export default function About() {

    const state = useSelector(state => state.todo)
  return (
    <div>
      About works !
      {state.length}
    </div>
  )
}
