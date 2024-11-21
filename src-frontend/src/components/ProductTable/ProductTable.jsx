import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

const products = [
  {
    id: 1,
    name: 'Jabón De Argán',
    description:
      'Jabón de aceite de oliva con aceite de Argán, que hidrata, suaviza y previene el envejecimiento de la piel.',
    price: '5.85€',
    stock: 70,
  },
  {
    id: 2,
    name: 'Jabón Mentolado',
    description:
      'Jabón de glicerina y aceite de coco con aceites esenciales de menta y eucalipto.',
    price: '5.40€',
    stock: 70,
  },
  // Agrega más productos aquí
];

const ProductTable = () => {
  return (
    <table className="ProductTable">
      <thead>
        <tr>
          <th>Artículo</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
