import React, { useState } from 'react'
import { ButtonStyle } from './ButtonElements'


const Button = value => {
  const [play, setPlay] = useState(false);

  //Switch state
  const switchit = () => {setPlay(!play)}
  //Getting track info
  const track = value.value
  const trackName = track && track.name ? track.name : null;
  const trackPath = track && track.publicURL ? track.publicURL : null;
  //Making track playable
  const playAudio = new Audio(trackPath)
  
  const playSound = () => {
    if (play === false) {
      playAudio.play();
      switchit()
      setTimeout(() => {
        setPlay(false)
      }, playAudio.duration * 1000);
    } else {}
  }
  
  return (
    <>
      <ButtonStyle onClick={playSound}>{trackName}</ButtonStyle>
    </>
  )
}

export default Button