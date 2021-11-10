import React from 'react'

import { Container, Row, Col } from "react-bootstrap"

import './Hero.scss'

const Hero = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="bg-info text-center">
                    <h1>Hero Column</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero