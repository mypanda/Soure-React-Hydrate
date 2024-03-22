import React, { useState } from 'react'
// import styles from './home.module.css'
import styled from 'styled-components'

const Title = styled.h1`
  color: green;
  font-size: 3rem
`

export const Home = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      {/* <h1 className={styles.header}>Home</h1> */}
      <Title>Home</Title>
      <button onClick={() => setCounter(preCounter => preCounter + 1)}>点击 {counter}</button>
    </div>
  )
}