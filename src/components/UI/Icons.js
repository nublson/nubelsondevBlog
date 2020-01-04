import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const StyledButton = styled(FontAwesomeIcon)`
    color: var(--primary);
    margin-left: 0.5rem;
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

    @media ${props => props.theme.mediaQueries.medium} {
        width: 4rem;
        height: 4rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
        width: 3.5rem;
        height: 3.5rem;
        margin: 0 1rem;
        border: 1px solid var(--primary-light);
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        width: 3rem;
        height: 3rem;
        margin: 0 0.8rem;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--primary);
    font-size: 2.5rem;
    transition: all 0.2s;

    ${StyledLink}:hover & {
        color: var(--background);
    }

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 2rem;
    }
`

export const ButtonIcon = ({ to }) => {
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
