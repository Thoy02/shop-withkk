import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{
      background: 'white',
      borderBottom: '1px solid #e0e0e0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 20px'
      }}>
        {/* Logo - 视觉重点 */}
        <Link to="/" style={{
          fontSize: '24px',
          fontWeight: '700',
          textDecoration: 'none',
          color: '#000'
        }}>
          🛒 ShopHub
        </Link>

        {/* 导航菜单 */}
        <nav style={{
          display: 'flex',
          gap: '32px'
        }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: '#333',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'color 0.2s'
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
             onMouseLeave={(e) => e.currentTarget.style.color = '#333'}>
            Home
          </Link>
          <Link to="/products" style={{
            textDecoration: 'none',
            color: '#333',
            fontSize: '16px',
            fontWeight: '500'
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
             onMouseLeave={(e) => e.currentTarget.style.color = '#333'}>
            Products
          </Link>
        </nav>

        {/* 购物车图标 */}
        <div style={{ fontSize: '20px' }}>
          🛍️
        </div>
      </div>
    </header>
  );
};

export default Header;