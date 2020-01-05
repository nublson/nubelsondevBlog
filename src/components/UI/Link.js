import styled from "styled-components"
import { Link } from "react-scroll"

export const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: var(--primary);
    }
`
