import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section - 最大的视觉重点 */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
            Welcome to ShopHub
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '32px', opacity: 0.95 }}>
            Discover amazing products at unbeatable prices
          </p>
          <button 
            className="btn-primary"
            onClick={() => navigate('/products')}
            style={{ 
              background: 'white', 
              color: '#000',
              fontSize: '18px',
              padding: '14px 32px'
            }}
          >
            Shop Now →
          </button>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container section">
        <h2>Shop by Category</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginTop: '24px'
        }}>
          {['Electronics', 'Fashion', 'Home & Living', 'Sports'].map(cat => (
            <div key={cat} style={{
              background: 'white',
              padding: '40px',
              textAlign: 'center',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                {cat === 'Electronics' && '📱'}
                {cat === 'Fashion' && '👕'}
                {cat === 'Home & Living' && '🏠'}
                {cat === 'Sports' && '⚽'}
              </div>
              <h3>{cat}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Preview */}
      <div className="container section">
        <h2>Featured Products</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="product-card">
              <div className="product-image" style={{ background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                🎁
              </div>
              <div className="product-info">
                <h3 className="product-title">Product {i}</h3>
                <p className="product-description">Amazing product with great features</p>
                <div className="price">${49.99 + i * 10}</div>
                <button className="btn-primary" style={{ width: '100%' }}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;