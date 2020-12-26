import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const contact = ({ siteTitle }) => (
    <Layout>
        <SEO title="Инструкции, гайды, лайфхаки, решение проблем с React — React Developer" />
      <p className="bio_title">Привет, меня зовут Даниил.</p>
      <p className="bio_description">Если тебе хочется поболтать или есть идеи по проектам или даже оффер в компанию всегда открыт предложениям :)</p>
      <p className="bio_description">Ты можешь связаться со мной через эту контактную форму.</p>
      <Form/>
</Layout>
)

export default contact