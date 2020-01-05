require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Nubelsondev | Blog`,
        description: `I'm a 22 years old self-taught Full-Stack Developer, from Angola, currently living in Portugal.`,
        author: `Nubelson Fernandes`,
        year: `2020`,
        blogUrl: `https://nubelsonblog.netlify.com`,
        social: {
            twitter: `nubelsondev`,
            github: `nubelsondev`,
            instagram: `nubelsondev`,
            linkedin: `nubelsondev`,
            email: `nubelsondev@hotmail.com`,
        },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `NubelsonBlog`,
                short_name: `NubelsonBlog`,
                start_url: `/`,
                background_color: `#292826`,
                theme_color: `#F9D342`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#F9D342`,
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        `gatsby-plugin-offline`,
    ],
}
