import React, { Children } from 'react'
import { BodyBG, BodyVideo, BodyTitle, ButtonsArea } from './BodyElements'
import vidback from '../../video/vidback.mp4'

import facudiaz from '../../images/facudiaz.png'
import Layout from '../layout.css'

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
        <ButtonsArea>A</ButtonsArea>
      </BodyBG>
    </>
  )
}

export default Body