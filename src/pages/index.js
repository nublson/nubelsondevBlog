import React from "react"

import Layout from "../components/Layout/Layout"

import Home from "../sections/home"
import Blog from "../sections/blog"

const App = () => {
    return (
        <Layout>
            <Home />
            <Blog />
        </Layout>
    )
}

export default App
