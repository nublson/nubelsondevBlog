import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout/Layout"
import { Container } from "../components/Layout/Elements"

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            blogThumbnail {
                file {
                    url
                }
            }
            blogTitle
            blogAuthor
            blogDate(formatString: "MMM D, YYYY")
            blogBody {
                json
            }
        }
    }
`

const Blog = styled.div`
    width: 100%;
    margin-top: 7rem;
    padding: 4rem 0rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const BlogHeader = styled.div`
    height: 25vh;
    max-width: 80rem;
    margin: 0 3rem 6rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
        font-size: 5.4rem;
    }

    p {
        font-size: 1.4rem;

        span {
            color: var(--primary);
            font-size: 1.6rem;
            font-weight: bold;
        }
    }

    @media ${props => props.theme.mediaQueries.medium} {
        h2 {
            font-size: 5rem;
        }
    }

    @media ${props => props.theme.mediaQueries.small} {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    @media ${props => props.theme.mediaQueries.smaller} {
        h2 {
            font-size: 4rem;
        }
    }
`

const StyledThumbnail = styled.img`
    width: 100%;
`

const Content = styled.div`
    text-align: center;
    max-width: 80rem;
    font-size: 1.9rem;
    overflow: visible;
    margin: 2rem auto 0;
    padding: 2rem 4rem 12rem;

    img {
        width: 100%;
        margin: 1rem 0;
    }
`

const BlogTemplate = ({ data }) => {
    const {
        blogThumbnail,
        blogTitle,
        blogAuthor,
        blogDate,
        blogBody,
    } = data.contentfulBlogPost
    const { url: thumbnailUrl } = blogThumbnail.file
    const { json } = blogBody
    const options = {
        "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const { url } = node.data.target.fields.file["en-US"]
            return <img alt={alt} src={url} />
        },
    }

    return (
        <Layout>
            <Blog>
                <BlogHeader>
                    <HeaderContent>
                        <h2>{blogTitle}</h2>
                        <p>
                            by <span>{blogAuthor}</span> em {blogDate}
                        </p>
                    </HeaderContent>
                </BlogHeader>

                <StyledThumbnail src={thumbnailUrl} />
                <Container>
                    <Content>
                        {documentToReactComponents(json, options)}
                    </Content>
                </Container>
            </Blog>
        </Layout>
    )
}

export default BlogTemplate
