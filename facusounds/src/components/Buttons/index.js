import * as React from 'react'
import { ButtonArea } from './ButtonElements'
import Button from '../Button'


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

const musicNames = {
  Army: 'Army Blues at Blues Alley BugaBlue',
  Earth: 'Earth Wind and Fire - Moment of Truth',
  Fox: 'Fox Morrow - Funk This up',
  Himno_PP_Merengue: 'Himno del PP Merengue',
  Himno_RDA: 'Himno de la RDA',
  Himno_Riego: 'Himno de Riego',
  Himno_URSS: 'Himno de la URSS',
  Welcome_to_Hitsville: 'Welcome to Hitsville',
  White_Bones: 'White Bones - Whats the Catch',
  Yo_si_Quiero_a_Venezuela: 'Yo si Quiero a Venezuela',
  ZOO_Faena: 'ZOO - Faena'
}


const Buttons = mode => {

  let ret = mode.mode

  return (
    <>
      {ret === 'audios' ? 
        Object.entries(audioNames).map((val) => {
        return <ButtonArea><Button value={val}></Button></ButtonArea>
        })
        :
        Object.entries(musicNames).map((val) => {
        return <ButtonArea><Button value={val}></Button></ButtonArea>
        })
      }
    </>
  )
}

export default Buttons
