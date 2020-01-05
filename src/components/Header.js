import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "./UI/Logo"
import { Container } from "./Layout/Elements"
import { ShakeAnimation } from "./UI/Animations"
import { StyledLink } from "./UI/Link"

const StyledHeader = styled.header`
    width: 100%;
    max-width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: rgba(41, 40, 38, 0.99);
    box-shadow: 0 0.5rem 2rem #1b1a18;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden !important;
    height: 7rem;

    @media ${({ theme }) => theme.mediaQueries.small} {
        position: relative;
    }
`

const StyledNav = styled.nav`
    display: flex;
    margin-left: 2rem;

    @media ${({ theme }) => theme.mediaQueries.small} {
        position: relative;
    }

    a {
        font-size: 1.6rem;
        text-transform: uppercase;

        &:not(:last-child) {
            margin-right: 1rem;
        }
    }
`

const RedirectLink = styled(Link)`
    color: var(--text);
    text-decoration: none;

    &:hover {
        color: var(--primary);
        animation: ${ShakeAnimation} 1s;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Wrapper>
                    <Logo
                        spanName="Blog"
                        namesize={2}
                        spansize={1.6}
                        to={"/"}
                    />

                    <StyledNav>
                        <RedirectLink to="/">Home</RedirectLink>
                        <StyledLink to="contact" spy={true} smooth="true">
                            Contact
                        </StyledLink>
                    </StyledNav>
                </Wrapper>
            </Container>
        </StyledHeader>
    )
}

export default Header
