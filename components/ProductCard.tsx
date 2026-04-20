import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: 'pointer' }}>
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description.substring(0, 60)}...</p>
        <div className="price">${product.price}</div>
        <button 
          className="btn-primary" 
          style={{ width: '100%', marginTop: '12px' }}
          onClick={(e) => {
            e.stopPropagation();
            alert(`Added ${product.name} to cart!`);
          }}
        >
          Add to Cart →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;