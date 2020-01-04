import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import {
    StyledSection,
    Wrapper,
    Container,
} from "../components/Layout/Elements"
import { ButtonIcon } from "../components/UI/Icons"

const BlogList = styled.ul`
    width: 100%;
    list-style: none;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const BlogItem = styled.li`
    position: relative;
    width: 100%;
    padding: 3rem;
    margin: 2rem;
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

    h3 {
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

const ButtonLink = styled(Link)`
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: line-through;
    color: var(--primary);
    transition: all 0.2s;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        text-decoration: line-through transparent;
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
                        blogDate(formatString: "MMMM d, YYYY")
                    }
                }
            }
        }
    `)

    const { edges } = data.allContentfulBlogPost
    const nodes = edges.map(edge => {
        const { id, blogThumbnail, blogTitle, blogAuthor, blogDate } = edge.node
        const { url } = blogThumbnail.file

        return (
            <BlogItem key={id} thumbnail={url}>
                <BlogInfo>
                    <h3>{blogTitle}</h3>
                    <p>
                        {" "}
                        <span>{blogAuthor}</span> on {blogDate}
                    </p>
                </BlogInfo>
                <ButtonLink to="/">
                    Read more <ButtonIcon />{" "}
                </ButtonLink>
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
