module.exports = {
    siteMetadata: {
      siteUrl: "https://www.batin.sh",
      brand: "Batın Evirgen",
      navigationLinks: [
        { text: "Blog", to: "/blog" },
        { text: "About", to: "/about" }
      ]
    },
    plugins: [
      "gatsby-plugin-postcss",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "blog",
          path: `${__dirname}/content/blog`
        }
      },
      "gatsby-plugin-mdx"
    ]
}