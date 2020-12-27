import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import HMain from "../components/header-crap"
import Menu from "../components/header-menu"
import ProductGrid from "../components/productGrid"
//import WUC from "../components/WUC"

const IndexPage = ({data:products}) => (
  <div>
  <SEO title="Home" />
    <Menu />
    <HMain />

    <div>
      <ProductGrid products={products.nodes}/>
    </div>
    </div>
)
export const query = graphql`
{
   products:allGraphCmsProducts(limit: 3, sort: {fields: createdDate}) {
     nodes {
       productName
       id
     }
   }
 }
`

export default IndexPage
