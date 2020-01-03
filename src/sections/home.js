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
    font-size: 7rem;
    font-weight: 400;
    line-height: 1;
    text-transform: uppercase;
    backface-visibility: hidden;

    .textTitle {
        font-size: 2rem;
        font-weight: 300;
    }

    .logoSpan {
        display: inline-block;
        font-size: 6rem;
        font-weight: 700;
        font-style: italic;
        text-decoration: line-through;
        color: var(--primary);
        transform: translateX(-2rem);
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
