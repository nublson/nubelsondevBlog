import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    year
                }
            }
        }
    `)

    const { author, year } = site.siteMetadata

    return (
        <StyledFooter id="contact">
            <Container>
                <Wrapper>
                    <Social />
                    <FooterText>
                        Copyright &copy; {year}, {author}{" "}
                    </FooterText>
                </Wrapper>
            </Container>
        </StyledFooter>
    )
}

export default Footer
