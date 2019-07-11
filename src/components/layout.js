import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "./layout.sass"

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
    <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
        <div className="hero-body" style={{margin:"auto"}}>
          {children}
        </div>
        <div className="hero-foot">
          <Footer/>
        </div>
    </section>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
