import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./hcrap.css"


const HMain = ({ siteTitle }) => (
  <div class="flex-container cursor">
    <div class="flex-child w3-container w3-padding-72 black">
      <h1 className="w3-jumbo">Black<span className="flicker">out</span></h1>
      <h2>The Absolute </h2>
    </div>

    <div class="flex-child w3-container w3-padding-72 white">
      <h1 className="w3-jumbo">Friday</h1>
      <h2>Best Deals</h2>
      <h5 className="tiny-text">*Deals may not be best.</h5>
    </div>

  </div>

)


export default HMain
