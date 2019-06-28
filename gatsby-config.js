module.exports = {
  siteMetadata: {
    title: 'ssaber',
    description: 'work in progress',
    siteUrl: 'https://ssaber.com/',
    social: {
      twitter: 'smkiv',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/essays`,
        name: 'essays',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://kinney.us3.list-manage.com/subscribe/post?u=8557f528c7390990a74ec0e34&amp;id=7730fbe58e',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ssaber',
        short_name: 'ssaber',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#FF5A5A',
        display: 'minimal-ui',
        icon: 'content/assets/ssaber.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
