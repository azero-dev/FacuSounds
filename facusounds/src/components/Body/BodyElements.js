import * as React from 'react'
import styled from 'styled-components'

export const BodyBG = styled.div`
  background-color: red;
  width: 100vw;
  height: 80vh;
  padding: 0;
  margin: 0;
`

export const BodyVideo = styled.div`
  width: '100vw';
  position: 'fixed';
  overflow: 'hidden';
  bottom: '10%';
  z-index: '0';
`

export const BodyTitle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 20vh;
  /* background-color: blue; */
  text-align: center;
`

export const ButtonsArea = styled.div`
  position: relative;
  top: 0vh;
  left: 0;
  padding: 20px 0;
  width: 100vw;
  /* height: 60vh; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`