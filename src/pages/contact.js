import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Form from "../components/form"

const contact = ({ siteTitle }) => (
    <Layout>
        <SEO title="Инструкции, гайды, лайфхаки, решение проблем с React — React Developer" />
      <p className="bio_title">Привет, меня зовут Даниил.</p>
      <p className="bio_description">Ты можешь связаться со мной через эту контактную форму.</p>
      <Form/>
</Layout>
)

export default contact