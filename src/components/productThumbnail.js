import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./hcrap.css"
import Image from "./image"
import SEO from "./seo"

function ProductThumbnail({id,productName}) {
  return(

  <div className="w3-margin-small flex-child">
    <SEO title="Products" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div className="pt-3 md:pt-6 text-center">
      <h3 style={{align: 'center'}}>
        {productName}
      </h3>
    </div>
  <button className="w3-button">Add to Cart</button>
</div>
  )
}

export default ProductThumbnail;