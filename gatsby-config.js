module.exports = {
  siteMetadata: {
    author: `Henry Quinn`,
    description: `The Henry Quinn Tech Enthusiast Scholarship`,
    keywords: `Tech, Enthusiast, Scholarship, Henry, Quinn, Computer, Science, Technology`,
    title: `Tech Enthusiast Scholarship`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henry Quinn Tech Enthusiast Scholarship`,
        short_name: `Tech Enthusiast Scholarship`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
