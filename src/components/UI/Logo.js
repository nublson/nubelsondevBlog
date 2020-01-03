import React from "react"
import styled from "styled-components"

import { StyledLink } from "./Link"

const CustomLogo = styled(StyledLink)`
    display: inline-block;
    font-size: ${props => `${props.namesize}rem`};
    font-weight: 400;
    font-style: italic;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;

    span {
        color: var(--primary);
        text-decoration: line-through;
        font-size: ${props => `${props.spansize}rem`};
        font-weight: 900;
        position: absolute;
        bottom: -4%;
    }
`

const Logo = ({ spanName, namesize, spansize, to }) => {
    return (
        <CustomLogo
            to={to}
            spy={true}
            smooth={true}
            namesize={namesize}
            spansize={spansize}
        >
            Nubelsondev
            <span>{spanName}</span>
        </CustomLogo>
    )
}

export default Logo
