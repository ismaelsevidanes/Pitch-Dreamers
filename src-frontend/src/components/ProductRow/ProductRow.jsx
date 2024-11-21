import React from 'react';
import './ProductRow.css';

const ProductRow = ({ product }) => {
  return (
    <tr className="ProductRow">
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
    </tr>
  );
};

export default ProductRow;