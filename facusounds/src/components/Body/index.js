import React from 'react'
import { BodyBG, BodyVideo, BodyTitle, ButtonsTitle, ButtonsArea } from './BodyElements'
import vidback from '../../video/vidback.mp4'

import facudiaz from '../../images/facudiaz.png'
import Buttons from '../Buttons'

const Body = () => {
  return (
    <>
      <BodyBG>
        <BodyVideo>
        <video autoPlay loop muted id='VidBG'>
            <source src={vidback} type='video/mp4' />
        </video>
        </BodyVideo>
        <BodyTitle>
          <img src={facudiaz} alt="Facu Diaz" style={{height: '20vh', margin: '10px'}} />
        </BodyTitle>
        <ButtonsTitle>Audios:</ButtonsTitle>
        <ButtonsArea>
          <Buttons mode="audios" />
        </ButtonsArea>
        <ButtonsTitle>Musiquita</ButtonsTitle>
        <ButtonsArea>
          <Buttons  mode="music" />
        </ButtonsArea>
      </BodyBG>
    </>
  )
}

export default Body