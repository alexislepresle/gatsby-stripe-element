import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-item">
      <Link to="/" className="subtitle" >Stripe Element with Gatsby.js</Link>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Github" href="https://github.com/">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>
                Github
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
