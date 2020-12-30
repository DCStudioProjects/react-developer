import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Страница не найдена — ошибка 404" />
    <h1>Страница не найдена — ошибка 404</h1>
    <p>На сайте ведутся технические работы или Вы перешли по устаревшей ссылке.</p>
  </Layout>
)

export default NotFoundPage
