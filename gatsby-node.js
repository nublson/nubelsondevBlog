const path = require("path")

module.exports = {
    async createPages({ graphql, actions }) {
        const { createPage } = actions

        // Get path to template page
        const BlogTemplate = path.resolve("./src/templates/blogTemplate.js")

        // get Contentful data
        const { data } = await graphql(`
            query {
                allContentfulBlogPost {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `)

        const { edges } = data.allContentfulBlogPost

        // Create new Pages
        edges.forEach(edge => {
            createPage({
                component: BlogTemplate,
                path: `/${edge.node.slug}`,
                context: {
                    slug: edge.node.slug,
                },
            })
        })
    },
}
