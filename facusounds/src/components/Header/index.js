import * as React from 'react'
import { HeadArea } from './HeaderElements'
import { useStaticQuery, graphql } from "gatsby"


const Header = () => {

  return (
    <>
      <HeadArea>
        FacuSounds
      </HeadArea>
    </>
  )
}

export default Header