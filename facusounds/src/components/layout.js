import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {children}

      <footer style={{
        position: 'relative',
          background: "#cc0000",
          width: "100%",
          height: '10vh',
          padding: "2vh 0",
          color: "white",
          'zIndex': '10',
        }}>
        <p style={{
            padding: "0 4vw",
          }}>
          ©opyleft - Built by Anonymous United in the Morning. Special thanks to{" "}
          <a href="https://www.twitch.tv/fadrians"
            style={{
              color: "white",
              "fontWeight": "bold",
              "textDecoration": "none",
            }}> fadrians </a>{" "} por haber encontrao el "Bieeeen!".
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
