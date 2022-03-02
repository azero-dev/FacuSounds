import React, { useState } from 'react'
import { ButtonStyle } from './ButtonElements'


// Audios
import PutaMierda from '../../sounds/audios/PutaMierda.mp3'
import Bieeeen from '../../sounds/audios/Bieeeen.mp3'
import Abandonado from '../../sounds/audios/Abandonado.mp3'
import Educao from '../../sounds/audios/Educao.mp3'
import Ehpropiese from '../../sounds/audios/Ehpropiese.mp3'
import PerroSanxe from '../../sounds/audios/PerroSanxe.mp3'
import Porrista from '../../sounds/audios/Porrista.mp3'
import SoyFalangista from '../../sounds/audios/SoyFalangista.mp3'
import Televisiong from '../../sounds/audios/Televisiong.mp3'

// Music
import Army from '../../sounds/musiquita/Army.mp3'
import Earth from '../../sounds/musiquita/Earth.mp3'
import Fox from '../../sounds/musiquita/Fox.mp3'
import Himno_PP_Merengue from '../../sounds/musiquita/Himno_PP_Merengue.mp3'
import Himno_RDA from '../../sounds/musiquita/Himno_RDA.mp3'
import Himno_Riego from '../../sounds/musiquita/Himno_Riego.mp3'
import Himno_URSS from '../../sounds/musiquita/Himno_URSS.mp3'
import Welcome_to_Hitsville from '../../sounds/musiquita/Welcome_to_Hitsville.mp3'
import White_Bones from '../../sounds/musiquita/White_Bones.mp3'
import Yo_si_Quiero_a_Venezuela from '../../sounds/musiquita/Yo_si_Quiero_a_Venezuela.mp3'
import ZOO_Faena from '../../sounds/musiquita/ZOO_Faena.mp3'


const matchNames = {
  PutaMierda: PutaMierda,
  Bieeeen: Bieeeen,
  Abandonado: Abandonado,
  Educao: Educao,
  Ehpropiese: Ehpropiese,
  PerroSanxe: PerroSanxe,
  Porrista: Porrista,
  SoyFalangista: SoyFalangista,
  Televisiong: Televisiong,
  Army: Army,
  Earth: Earth,
  Fox: Fox,
  Himno_PP_Merengue: Himno_PP_Merengue,
  Himno_RDA: Himno_RDA,
  Himno_Riego: Himno_Riego,
  Himno_URSS: Himno_URSS,
  Welcome_to_Hitsville: Welcome_to_Hitsville,
  White_Bones: White_Bones,
  Yo_si_Quiero_a_Venezuela: Yo_si_Quiero_a_Venezuela,
  ZOO_Faena: ZOO_Faena
}


const Button = value => {
  const [play, setPlay] = useState(false);

  const sound = value["value"][0]
  const soundMatched = matchNames[sound]
  const playAudio = new Audio(soundMatched)

  const switchit = () => {
    setPlay(!play)
  }

  const playSound = () => {
    if (play === false) {
      playAudio.play();
      switchit()
      setTimeout(() => {
        setPlay(false)
    }, playAudio.duration * 1000);
    } else {
      // playAudio.pause()
    }
  }
  
  return (
    <>
      <ButtonStyle onClick={playSound}>{value['value'][1]}</ButtonStyle>
    </>
  )
}

export default Button