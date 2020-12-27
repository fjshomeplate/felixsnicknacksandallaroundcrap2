import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./hcrap.css"
import Image from "./image"


const Menu = ({ siteTitle }) => (
  <div className="header">
    <div className="logo">
    <a href="/">
  <div style={{ maxWidth: `200px` }}>  
    <Image
      alt="Felix's Nick Nacks and all around crap logo"
    />
    </div>
    </a>
    </div>
  </div>

)


export default Menu
