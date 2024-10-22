import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Nike Air Max', price: '1.500.000', image: 'https://static.nike.com/a/images/t_default/d7yyh7rta3tkye7kdyka/NIKE+AIR+MAX+97.png' },
  { id: 2, name: 'Nike Air Force 1 ', price: '1.300.000', image: 'https://static.nike.com/a/images/t_default/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/AIR+FORCE+1+%2707+FRESH.png' },
  { id: 3, name: 'Nike Blazer Mid', price: '900.000', image: 'https://static.nike.com/a/images/t_default/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png' },
  { id: 4, name: 'Nike Air Max Pulse', price: '1.900.000', image: 'https://static.nike.com/a/images/t_default/e0b13bf1-9be8-4329-b40f-d28b6ae62e7d/NIKE+AIR+MAX+PULSE.png' },
];

function ProductList() {
  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap',
      gap: '20px', 
      justifyContent: 'center', 
      marginTop: '50px',
      marginBottom: '50px'
    }}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
