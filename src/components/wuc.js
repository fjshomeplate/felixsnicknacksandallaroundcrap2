import React from "react"


const WUC = () => {
  const closeCrackers() {
    //close window here
    alert("amazing!")
  }
  const handleClick = () => closeCrackers();
  render(
    <div>
    <h3>We Use <a href="https://www.carrscrackers.com/en_US/home.html">Crackers<a> ...*crunch*... to power your experience on this site. *crunch*</h3>
    <button onclick={handleClick}>Ok<button>
    </div>
  )
}

export default WUC

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProductThumbnail = () => {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsProducts {
        nodes {
          productName
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ProductThumbnail
