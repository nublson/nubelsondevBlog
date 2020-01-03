import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyles from "../../utils/styles/global"
import theme from "../../utils/styles/theme"
import SEO from "../Seo"

import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <SEO />
            <Header />
            {children}
            <Footer />
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
