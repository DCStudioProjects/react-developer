module.exports = {
  siteMetadata: {
    title: `React Developer`,
    author: {
      name: `Daniil Chistyakov`,
      summary: `Frontend-разработчик, который делает крутые приложения.`,
    },
    description: `Инструкции, обзоры, полезные фичи по React, HTML, CSS.`,
    siteUrl: `https://react-developer.vercel.app`,
    social: {
      twitter: `dan_chistyakov`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [],
        excludePaths: ["/contact"]
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `react-developer`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://react-developer.vercel.app',
        sitemap: 'https://react-developer.vercel.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
            resolve: `gatsby-remark-highlight-code`,
            options: {
            terminal: 'carbon'
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Developer`,
        short_name: `React Developer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `content/images/icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
