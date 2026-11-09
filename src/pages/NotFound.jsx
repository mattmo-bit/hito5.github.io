import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
      <h3 style={{ margin: '10px 0 20px 0' }}>¡Oops! La página que buscas no existe :/</h3>
      <Link 
        to="/" 
        style={{ background: '#1a1a1a', color: '#fff', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none' }}
      >
        Volver al Inicio 🍕
      </Link>
    </div>
  );
};

export default NotFound;