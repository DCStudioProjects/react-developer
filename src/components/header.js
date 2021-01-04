import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { setConfig } from 'react-hot-loader'

setConfig({
    showReactDomPatchNotification: false
})
const Header = ({ siteTitle }) => (
  <header className="top_navbar">
    <h1>
      <Link to="/" className="site_title">
        {siteTitle}
      </Link>
    </h1>
    <div className="desktop_nav">
    <Link to="/react">#react</Link>
    <Link to="/gatsby">#gatsby</Link>
    <Link to="/vue">#vue</Link>
    <Link to="/graphql">#graphql</Link>
    <Link to="/contact">#написать_мне</Link>
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
