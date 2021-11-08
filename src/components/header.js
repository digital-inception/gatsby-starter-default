import * as React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="bg-light">
    <Container>
      <Navbar expand="md" bg="light" variant="light">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarRsponsive" />
        <Navbar.Collapse id="navbarRsponsive" className="justify-content-end">
          <Nav as="ul">
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">Page 2</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/using-ssr" className="nav-link" activeClassName="active">Using SSR</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
