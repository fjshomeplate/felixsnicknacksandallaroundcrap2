import React from 'react';

import ProductThumbnail from './productThumbnail';

function ProductList({ products }) {
  if (!products) return null;

  return <div className="flex flex-wrap -mx-6">{products.map(ProductThumbnail)}</div>;
}

export default ProductList;
