import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 124rem;
    margin: 0 auto;
    padding: 0 4rem;
    position: relative;

    @media ${props => props.theme.mediaQueries.small} {
        padding: 0 3rem;
    }
    @media ${props => props.theme.mediaQueries.smaller} {
        padding: 0 2rem;
    }
`
export const StyledSection = styled.section`
    width: 100%;
    position: relative;
`

export const Wrapper = styled.div`
    padding: 6rem 0rem;
    margin-top: 7rem;
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries.small} {
        margin-top: 6rem;
        padding: 4rem 0rem;
    }
    @media ${({ theme }) => theme.mediaQueries.smaller} {
        padding: 3rem 0rem;
    }
`
