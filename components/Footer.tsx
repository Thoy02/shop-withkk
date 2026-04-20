import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#111',
      color: '#999',
      padding: '48px 0 24px',
      marginTop: '80px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{ color: 'white', marginBottom: '16px' }}>About Us</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Your trusted online shopping destination since 2024.
            </p>
          </div>
          <div>
            <h3 style={{ color: 'white', marginBottom: '16px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#999', textDecoration: 'none' }}>Shipping</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#999', textDecoration: 'none' }}>Returns</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#999', textDecoration: 'none' }}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: 'white', marginBottom: '16px' }}>Contact</h3>
            <p style={{ fontSize: '14px' }}>Email: support@shophub.com</p>
            <p style={{ fontSize: '14px' }}>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          paddingTop: '24px',
          borderTop: '1px solid #333',
          fontSize: '14px'
        }}>
          © 2024 ShopHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;