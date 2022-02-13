module.exports = {
    siteMetadata: {
      siteUrl: "https://www.batin.sh",
      brand: "Batın Evirgen",
      navigationLinks: [
        { text: "Blog", to: "/blog" },
        { text: "About", to: "/about" }
      ],
      seo: {
        title: "Batın Evirgen",
        titleTemplate: "%s | Batın Evirgen",
        description: "SEO Description",
        twitterHandle: "@_stradi"
      }
    },
    plugins: [
      "gatsby-plugin-postcss",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "blog",
          path: `${__dirname}/content/blog`
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "page",
          path: `${__dirname}/content/pages`
        }
      },
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 750
              }
            },
            {
              resolve: "gatsby-remark-prismjs"
            },
            {
              resolve: "gatsby-remark-katex",
              options: {
                strict: "ignore"
              }
            }
          ],
          remarkPlugins: [
            require("remark-math")
          ]
        }
      },
      "gatsby-plugin-sitemap"
    ]
}