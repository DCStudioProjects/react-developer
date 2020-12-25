import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Contact from "../pages/contact"
const hero = ({ siteTitle }) => (
  <header className="bio">
      <p className="bio_title">Привет, меня зовут Даниил.</p>
      <p className="bio_description">Здесь мы будем рассматривать проблемы по React.</p>
      <Link to="/contact">Написать мне</Link>
  </header>
)

export default hero