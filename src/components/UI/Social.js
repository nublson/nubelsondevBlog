import React from "react"
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
    margin-bottom: 5rem;
`

const Social = () => {
    return (
        <SocialWrapper>
            <Icon label="Github" href="http://youtube.com" icon={faGithub} />
            <Icon
                label="LinkedIn"
                href="http://youtube.com"
                icon={faLinkedinIn}
            />
            <Icon label="Twitter" href="http://youtube.com" icon={faTwitter} />
            <Icon
                label="Instagram"
                href="http://youtube.com"
                icon={faInstagram}
            />
        </SocialWrapper>
    )
}

export default Social
