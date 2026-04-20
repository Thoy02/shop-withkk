import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product data
  const product = {
    id: Number(id),
    name: 'Premium Product',
    price: 99.99,
    image: 'https://via.placeholder.com/600',
    description: 'This is an amazing product with incredible features. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Electronics',
    stock: 50
  };

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <button onClick={() => navigate(-1)} className="btn-secondary" style={{ marginBottom: '30px' }}>
        ← Back
      </button>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        background: 'white',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        {/* 产品图片 - 最大视觉重点 */}
        <div style={{
          background: '#f5f5f5',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          fontSize: '120px'
        }}>
          🎁
        </div>

        {/* 产品信息 */}
        <div>
          <h1 style={{ marginBottom: '16px' }}>{product.name}</h1>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px', lineHeight: '1.6' }}>
            {product.description}
          </p>
          
          {/* 价格 - 突出显示 */}
          <div className="price" style={{ fontSize: '32px', marginBottom: '16px' }}>
            ${product.price}
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <span style={{ color: '#666' }}>Category: </span>
            <strong>{product.category}</strong>
            <br />
            <span style={{ color: '#666' }}>Stock: </span>
            <strong style={{ color: product.stock > 0 ? 'green' : 'red' }}>
              {product.stock > 0 ? `${product.stock} units` : 'Out of stock'}
            </strong>
          </div>

          {/* 按钮 */}
          <button className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '18px' }}>
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;