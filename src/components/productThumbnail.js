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
