import React, { useState } from 'react'
import { useEffect } from 'react';
import { ButtonStyle } from './ButtonElements'


const Button = value => {
  const [play, setPlay] = useState(false);

  //Getting track info
  const track = value.value
  const trackName = track && track.name ? track.name : null;
  const trackPath = track && track.publicURL ? track.publicURL : null;

  //Making track playable
  // const playAudio = typeof window !== 'undefined' ? new Audio(trackPath) : null
  const [playAudio, setPlayAudio] = useState("");
  useEffect(() => {
    setPlayAudio(new Audio(trackPath))
  }, [trackPath])

  //On click
  const playSound = () => {
    const currentTime = playAudio.currentTime
    const duration = playAudio.duration
    if (play === false) {
      setPlay(true)
      playAudio.play()
    } else if (play === true) {
      if (currentTime === duration) {
        playAudio.play()
      } else {
        setPlay(false)
        playAudio.pause()
      }
    }
  }

  //On double click
  const stopSound = () => {
    playAudio.pause()
    playAudio.currentTime = 0;
    setPlay(false)
  }
  
  return (
    <>
      <ButtonStyle onClick={playSound} onDoubleClick={stopSound}>{trackName}</ButtonStyle>
    </>
  )
}

export default Button