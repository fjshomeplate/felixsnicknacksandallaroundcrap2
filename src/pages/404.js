import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const NotFoundPage = () => (
<div>
    <SEO title="404: Not found" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
  </div>
  <h1>No Crap Here!</h1>
</div>
)

export default NotFoundPage
