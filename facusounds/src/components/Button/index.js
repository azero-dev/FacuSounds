import * as React from 'react'
import { ButtonStyle } from './ButtonElements'

const Button = value => {

  // const audioTune = new Audio(PutaMierda);

  // const playSound = () => {
  //   audioTune.play();
  // }

  return (
    <>
      <ButtonStyle>{value['value'][1]}</ButtonStyle>
    </>
  )
}

export default Button