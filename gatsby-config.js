module.exports = {
    siteMetadata: {
        title: `Nubelsondev | Blog`,
        description: `I'm a 22 years old self-taught Full-Stack Developer, from Angola, currently living in Portugal.`,
        author: `Nubelson`,
        blogUrl: `https://blog.nubelsondev.com`,
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
            resolve: `gatsby-plugin-styled-components`,
        },
    ],
}
