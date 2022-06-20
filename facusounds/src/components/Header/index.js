import * as React from 'react'
import PropTypes from "prop-types"
import { HeadArea, HeadDiv, HeadLink } from './HeaderElements'


const Header = ({ siteTitle }) => {

  return (
    <>
      <HeadArea>
        <HeadDiv>
          <h1>
            <HeadLink to="/">
              {siteTitle}
            </HeadLink>
          </h1>
        </HeadDiv>
      </HeadArea>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `FacuSounds`,
}

export default Header