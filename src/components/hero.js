import { Link } from "gatsby"
import React from "react"
const hero = ({ siteTitle }) => (
  <header className="bio">
      <p className="bio_title">Привет, меня зовут Даниил.</p>
      <p className="bio_description">Здесь мы будем рассматривать проблемы по Frontend.</p>
      <Link to="/contact">Написать мне</Link>
  </header>
)

export default hero