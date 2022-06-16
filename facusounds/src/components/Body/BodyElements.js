import styled from 'styled-components'

export const BodyBG = styled.div`
  background-color: #000;
  width: 100vw;
  height: 80vh;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
`

export const BodyVideo = styled.div`
  width: 100vw;
  position: fixed;
  overflow: hidden;
  bottom: 10%;
  z-index: 0;

@media (max-width: 600px) {
  width: auto;
  height: 80vh;
  bottom: initial;
  top: 0;
}
`

export const BodyTitle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 20vh;
  text-align: center;
`

export const ButtonsTitle = styled.h1`
  display: inline;
  position: relative;
  margin: 0 0 0 2vw;
  padding: 10px;
  font-size: 1.6em;
  color: #fff;
  background-color: #c00;
  border-radius: 4px 14px 4px 4px;
`

export const ButtonsArea = styled.div`
  position: relative;
  /* top: 0vh;
  left: 0; */
  padding: 20px 0;
  margin: 0 0 6vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vw;
`