import * as React from 'react'
import { ButtonArea } from './ButtonElements'
import Button from '../Button'
import { useStaticQuery, graphql } from "gatsby"


const Buttons = mode => {
  //Query Audios
  const audiosObject = useStaticQuery(graphql`
  query SoundFetch {
    audiosQuery: allFile(
      filter: {sourceInstanceName: {eq: "audios"}, relativeDirectory: {eq: "audios"}}
    ) {
        nodes {
          name
          sourceInstanceName
          relativeDirectory
          absolutePath
          publicURL
        }
      }
    musicQuery: allFile(
      filter: {sourceInstanceName: {eq: "audios"}, relativeDirectory: {eq: "music"}}
    ) {
        nodes {
          name
          sourceInstanceName
          relativeDirectory
          absolutePath
          publicURL
        }
      }
    }
  `)

  const dataAudios = audiosObject.audiosQuery.nodes
  const dataMusic = audiosObject.musicQuery.nodes
  let ret = mode.mode

  return (
    <>
      {ret === 'audios' ? 
        dataAudios.map(val => {
        return <ButtonArea><Button value={val}></Button></ButtonArea>
        })
        :
        dataMusic.map(val => {
        return <ButtonArea><Button value={val}></Button></ButtonArea>
        })
      }
    </>
  )
}

export default Buttons