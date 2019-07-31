import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-item">
      <Link to="/" className="subtitle" > <span role="img" aria-label="sheep">💳</span> | Stripe Element with Gatsby.js</Link>
    </div>
    <div className="navbar-end">
    <div className="navbar-item">
        <div className="field">
          <p className="control">
            <button className="bd-tw-button button" data-social-network="Npm" href="https://www.npmjs.com/package/gatsby-theme-stripe-element">
              <span className="icon">
                <i className="fab fa-npm"></i>
              </span>
              <span>
                Package
              </span>
            </button>
          </p>
        </div>
      </div>
      <div className="navbar-item">
        <div className="field">
          <p className="control">
            <button className="bd-tw-button button" data-social-network="Github" href="https://github.com/alexislepresle/gatsby-stripe-element">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>
                Github
              </span>
            </button>
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
