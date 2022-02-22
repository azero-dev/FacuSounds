import React, { Children, useEffect } from 'react'
import { element } from 'prop-types'
import { ButtonArea } from './ButtonElements'
import Button from '../Button'

import PutaMierda from '../../sounds/audios/PutaMierda.mp3'
import Bieeeen from '../../sounds/audios/Bieeeen.mp3'
import Abandonado from '../../sounds/audios/Abandonado.mp3'
import Educao from '../../sounds/audios/Educao.mp3'
import Ehpropiese from '../../sounds/audios/Ehpropiese.mp3'
import PerroSanxe from '../../sounds/audios/PerroSanxe.mp3'
import Porrista from '../../sounds/audios/Porrista.mp3'
import SoyFalangista from '../../sounds/audios/SoyFalangista.mp3'
import Televisiong from '../../sounds/audios/Televisiong.mp3'


const Buttons = () => {

  const audioNames = {
    PutaMierda: 'Puta Mierda',
    Bieeeen: 'Bieeeen!',
    Abandonado: 'Abandonado',
    Educao: 'Educao',
    Ehpropiese: 'Ehpropiese!',
    PerroSanxe: 'Perro Sanxe',
    Porrista: 'Porrista',
    SoyFalangista: "Soy Falangista :'(",
    Televisiong: 'Televisiong'
  }

  // const musicNames = { 
  // }

  return (
    <>
      {Object.entries(audioNames).map((element) => {
        return <ButtonArea><Button value={element}></Button></ButtonArea>
      })}
    </>
  )
}

export default Buttons