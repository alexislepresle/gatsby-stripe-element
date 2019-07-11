module.exports = {
  siteMetadata: {
    title: `Gatsby-Stripe-Element`,
    description: `Little project with Gatsby.js and Stripe Element`,
    author: `alexislepresle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stripe`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-stripe-element`,
        short_name: `Gatsby-StripeElement`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
  ],
}
