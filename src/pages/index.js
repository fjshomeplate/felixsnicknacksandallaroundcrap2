import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HMain from "../components/header-crap"
import Menu from "../components/header-menu"
import ProductThumbnail from "../components/productThumbnail"
//import WUC from "../components/WUC"

const IndexPage = () => (
  <div>
  <SEO title="Home" />
    <Menu />
    <HMain />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ProductThumbnail />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
)

export default IndexPage
