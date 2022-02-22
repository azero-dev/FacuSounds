import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'relative',
      background: '#cc0000',
      height: "10vh",
      'z-index': '10',
    }}
  >
    <div
      style={{
        margin: `0 0 0 10vw`,
        padding: '3vh 0',
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
