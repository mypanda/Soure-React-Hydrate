import React, { useState } from 'react'
export const Home = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setCounter(pre => pre.counter + 1)}>点击 {counter}</button>
    </div>
  )
}