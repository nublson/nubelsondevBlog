import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import {
    StyledSection,
    Wrapper,
    Container,
} from "../components/Layout/Elements"

const BlogList = styled.div`
    width: 100%;
    list-style: none;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BlogItem = styled(Link)`
    position: relative;
    width: 100%;
    padding: 3rem;
    margin: 2rem;
    text-decoration: none;
    color: var(--text);
    background: url(${props => props.thumbnail}) no-repeat center;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 0.5rem 2rem #1b1a18;
    z-index: 0;
    backface-visibility: hidden;
    transition: all 0.2s;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    &:hover {
        transform: translateY(-1rem);
    }

    &::after {
        content: "";
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background: inherit;
        z-index: -1;
        filter: brightness(30%);
        border-radius: inherit;
    }
`

const BlogInfo = styled.div`
    margin-bottom: 3rem;
    padding: 3rem 0;

    h1 {
        font-size: 2.7rem;
    }

    p {
        font-size: 1.6rem;

        span {
            color: var(--primary);
            font-weight: bold;
        }
    }
`

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        id
                        blogThumbnail {
                            file {
                                url
                            }
                        }
                        blogTitle
                        blogAuthor
                        slug
                    }
                }
            }
        }
    `)

    const { edges } = data.allContentfulBlogPost
    const nodes = edges.map(edge => {
        const { id, blogThumbnail, blogTitle, blogAuthor, slug } = edge.node
        const { url } = blogThumbnail.file

        return (
            <BlogItem to={`/${slug}`} key={id} thumbnail={url}>
                <BlogInfo>
                    <h1>{blogTitle}</h1>
                    <p>
                        {" "}
                        <span>{blogAuthor}</span>
                    </p>
                </BlogInfo>
            </BlogItem>
        )
    })

    return (
        <StyledSection id="blog">
            <Container>
                <Wrapper>
                    <BlogList>{nodes}</BlogList>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Blog
