import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import {
    StyledSection,
    Wrapper,
    Container,
} from "../components/Layout/Elements"
import { Button } from "../components/UI/Icons"

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
    color: var(--primary);

    display: flex;
    align-items: center;
`

const Blog = () => {
    return (
        <StyledSection id="blog">
            <Container>
                <Wrapper>
                    <BlogList>
                        <BlogItem thumbnail="https://images.unsplash.com/photo-1544980919-e17526d4ed0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80">
                            <BlogInfo>
                                <h3>My First Blog</h3>
                                <p>
                                    {" "}
                                    <span>Nubelsondev</span> on January 03, 2020
                                </p>
                            </BlogInfo>
                            <ButtonLink to="/">
                                Read more <Button />{" "}
                            </ButtonLink>
                        </BlogItem>
                    </BlogList>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Blog
