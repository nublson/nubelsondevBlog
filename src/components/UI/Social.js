import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { Icon } from "./Icons"

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;

    @media ${props => props.theme.mediaQueries.medium} {
        margin-bottom: 8rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
        margin-bottom: 6rem;
    }
`

const Social = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    social {
                        twitter
                        github
                        instagram
                        linkedin
                        email
                    }
                }
            }
        }
    `)

    const { twitter, github, instagram, linkedin } = site.siteMetadata.social

    return (
        <SocialWrapper>
            <Icon
                label="Github"
                href={`https://github.com/${github}`}
                icon={faGithub}
            />
            <Icon
                label="LinkedIn"
                href={`https://www.linkedin.com/in/${linkedin}/`}
                icon={faLinkedinIn}
            />
            <Icon
                label="Twitter"
                href={`https://twitter.com/${twitter}`}
                icon={faTwitter}
            />
            <Icon
                label="Instagram"
                href={`https://www.instagram.com/${instagram}/`}
                icon={faInstagram}
            />
        </SocialWrapper>
    )
}

export default Social
