import * as React from "react"
import '../CSS/custom.css'
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap"

import bigWheel from "../images/img-5.jpg"
import canoe from "../images/img-7.jpg"
import { Link } from "gatsby"

// const Organization = (props) => (
//   <Col md={3} sm={6}>
//     <p><Image src={props.image} alt={props.alt} fluid /></p>
//   </Col>
// )

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <Container>
      <Row className="text-center">
        <Organization image={placeHolderImage} alt="gatsby-astronaut" />
        <Organization image={placeHolderImage} alt="gatsby-astronaut" />
        <Organization image={placeHolderImage} alt="gatsby-astronaut" />
        <Organization image={placeHolderImage} alt="gatsby-astronaut" />
        <Organization image={placeHolderImage} alt="gatsby-astronaut" />
        <Organization image={placeHolderImage} alt="gatsby-astronaut" />
        <Organization image={placeHolderImage} alt="gatsby-astronaut" />
        <Organization image={placeHolderImage} alt="gatsby-astronaut" />
      </Row>
    </Container> */}
    <Container>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Image 
              src={bigWheel} 
              className="card-image-top"
              alt="Big Wheel" 
              fluid 
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor arcu risus, at lobortis ante suscipit non. Proin quis consectetur quam. Vestibulum pellentesque ac lacus ut imperdiet. Etiam lacinia ullamcorper gravida. Integer cursus bibendum ante sed dignissim. Quisque at egestas erat. Morbi ac placerat metus. Suspendisse aliquam lorem pharetra, aliquet nisi quis, finibus ipsum. Sed nunc dui, ornare eu leo fermentum, consectetur vestibulum libero. Praesent aliquet ac urna sit amet fermentum. Donec velit odio, tincidunt pharetra erat at, tincidunt vulputate justo. Sed sollicitudin ipsum eget orci cursus, a porta ante euismod.
                </p>
              </Card.Text>
            </Card.Body>
            <p><Button href="#" variant="outline-dark">External Link</Button></p>
            <p><Link className="btn btn-primary" to="/">Internal Link</Link></p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Image 
              src={canoe} 
              className="card-image-top"
              alt="Canoe" 
              fluid 
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor arcu risus, at lobortis ante suscipit non. Proin quis consectetur quam. Vestibulum pellentesque ac lacus ut imperdiet. Etiam lacinia ullamcorper gravida. Integer cursus bibendum ante sed dignissim. Quisque at egestas erat. Morbi ac placerat metus. Suspendisse aliquam lorem pharetra, aliquet nisi quis, finibus ipsum. Sed nunc dui, ornare eu leo fermentum, consectetur vestibulum libero. Praesent aliquet ac urna sit amet fermentum. Donec velit odio, tincidunt pharetra erat at, tincidunt vulputate justo. Sed sollicitudin ipsum eget orci cursus, a porta ante euismod.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  </Layout>
)

export default IndexPage
