import React from "react"
import styled from "styled-components"

import { StyledLink } from "../components/UI/Link"

const StyledHome = styled.section`
    height: 80vh;
    width: 100%;

    position: relative;
`

const MainDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Title = styled.h1`
    color: var(--text-highlight);
    font-size: 7rem;
    font-weight: 400;
    line-height: 1;
    text-transform: uppercase;
    backface-visibility: hidden;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 5rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
        text-align: center;
        font-size: 4.5rem;
        position: relative;
        line-height: 1.5;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 4rem;
    }

    .textTitle {
        font-size: 2rem;
        font-weight: 300;
    }

    .logoSpan {
        display: inline;
        font-size: 6rem;
        font-weight: 700;
        font-style: italic;
        text-decoration: line-through;
        color: var(--primary);
        transform: translateX(-2rem);

        @media ${({ theme }) => theme.mediaQueries.medium} {
            font-size: 4rem;
        }

        @media ${props => props.theme.mediaQueries.small} {
            font-size: 3.5rem;
            display: block;
            position: absolute;
            right: 30%;
        }
        @media ${props => props.theme.mediaQueries.smallest} {
            font-size: 3rem;
        }
    }
`

const Home = () => {
    return (
        <StyledHome id="home">
            <MainDiv>
                <Title>
                    {" "}
                    <span className="textTitle">Welcome to</span> <br />{" "}
                    NubelsonDev{" "}
                    <span className="logoSpan">
                        {" "}
                        <StyledLink to="blog" spy={true} smooth={true}>
                            Blog
                        </StyledLink>{" "}
                    </span>
                </Title>
            </MainDiv>
        </StyledHome>
    )
}

export default Home
