import React from 'react';
import ProductCard from './ProductCard/ProductCard';

function ProductList({ products }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          priceRange={product.priceRange}
          onBuy={() => alert(`Mua sản phẩm: ${product.title}`)}
        />
      ))}
    </div>
  );
}

export default ProductList;
