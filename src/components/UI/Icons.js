import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const StyledButton = styled(FontAwesomeIcon)`
    color: var(--primary);
    margin-left: 1rem;
`
const StyledLink = styled.a`
    text-decoration: none;
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    border: 1px dashed var(--primary);
    margin: 0 1.5rem;
    cursor: pointer;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--primary);
        border-color: var(--background);
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--primary);
    font-size: 2.5rem;
    transition: all 0.2s;

    ${StyledLink}:hover & {
        color: var(--background);
    }
`

export const Button = ({ to }) => {
    return (
        <>
            <StyledButton icon={faLongArrowAltRight} />
        </>
    )
}

export const Icon = ({ icon, label, href }) => {
    return (
        <StyledLink
            rel="noreferrer"
            target="_blank"
            aria-label={label}
            href={href}
        >
            <StyledIcon icon={icon} />
        </StyledLink>
    )
}
