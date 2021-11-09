import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  

  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
