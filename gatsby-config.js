module.exports = {
  siteMetadata: {
    title: "Benjamin Steinig",
    description: "Welcome to my personal website!",
    author: "Ben Steinig",
    siteUrl: "https://www.bensteinig.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
        icon: `src/assets/favicon.ico`
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`,`projects`],
        //'jobs`,`projects`
        singleTypes: [`about`],
      },
    },
  ],
}
