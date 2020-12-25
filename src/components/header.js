import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="top_navbar">
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <div className="desktop_nav">
    <Link to="/react">#react</Link>
    <Link to="/html">#html</Link>
    <Link to="/css">#css</Link>
    <Link to="/decoding">#декодинг</Link>
    <Link to="/contact">#контакты</Link>
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
