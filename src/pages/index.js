import * as React from "react"
import '../CSS/custom.css'
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <h1>Lorem Ipsum</h1>
    </Container>
    
  </Layout>
)

export default IndexPage
