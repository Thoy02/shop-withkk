import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/300', description: 'High-quality wireless headphones with noise cancellation', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/300', description: 'Track your fitness and stay connected', category: 'electronics' },
    { id: 3, name: 'Cotton T-Shirt', price: 24.99, image: 'https://via.placeholder.com/300', description: 'Comfortable 100% cotton t-shirt', category: 'fashion' },
    { id: 4, name: 'Designer Jeans', price: 79.99, image: 'https://via.placeholder.com/300', description: 'Premium denim jeans', category: 'fashion' },
    { id: 5, name: 'Coffee Maker', price: 149.99, image: 'https://via.placeholder.com/300', description: 'Brew perfect coffee every morning', category: 'home' },
    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://via.placeholder.com/300', description: 'Eco-friendly non-slip yoga mat', category: 'sports' },
  ];

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      {/* 页面标题 - 视觉重点 */}
      <h1>All Products</h1>
      
      {/* Filter Bar */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {['all', 'electronics', 'fashion', 'home', 'sports'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 20px',
              background: filter === cat ? '#000' : 'white',
              color: filter === cat ? 'white' : '#333',
              border: filter === cat ? 'none' : '1px solid #ddd',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s'
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid - 统一间距 */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;