import React from "react"
import styled from "styled-components"

import { Container, Wrapper } from "./Layout/Elements"
import Social from "./UI/Social"

const StyledFooter = styled.footer`
    width: 100%;
    text-align: center;
`

const FooterText = styled.p`
    font-size: 1.6rem;
    margin-top: 2rem;
    text-transform: uppercase;
`

const Footer = () => {
    return (
        <StyledFooter id="contact">
            <Container>
                <Wrapper>
                    <Social />
                    <FooterText>Copyright &copy; 2020, nubelsondev</FooterText>
                </Wrapper>
            </Container>
        </StyledFooter>
    )
}

export default Footer
