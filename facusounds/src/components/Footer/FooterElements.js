import styled from 'styled-components'
import { Link } from 'gatsby'

export const FooterArea = styled.footer`
  position: relative;
  background: #cc0000;
  width: 100%;
  height: 10vh;
  padding: 2vh 0;
  color: white;
  z-index: 10;

  @media screen and (max-width: 992px) {
    /* height: 14vh; */
    height: 10vh;
    /* word-break: break-all; */
  }
`

export const FooterDiv = styled.div`
  padding: 0 4vw;

  @media screen and (max-width: 992px) {
    font-size: 0.9em;
  }
`
export const FooterLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`
