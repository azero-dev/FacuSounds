import * as React from 'react'
import { FooterArea, FooterDiv, FooterLink } from './FooterElements'


const Footer = () => {

  return (
    <>
      <FooterArea>
        <FooterDiv>
          ©opyleft - Built by {" "}
          <FooterLink to="https://twitter.com/FacuAnon">
            Anonymous United in the Morning
          </FooterLink>
          . {/* Special thanks to {" "}
          <FooterLink to="https://www.twitch.tv/fadrians">
            fadrians
          </FooterLink>
          {" "}por haber encontrao el "Bieeeen!". */}
          Esto es {" "}
          <FooterLink to="https://github.com/azero-dev/FacuSounds/tree/main/facusounds">
            código abierto
          </FooterLink>
          {"."}
        </FooterDiv>
      </FooterArea>
    </>
  )
}

export default Footer