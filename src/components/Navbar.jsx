import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Aquí puedes manejar el estado de token simulado o dejar los botones visibles según prefieras
  const token = false; 
  const total = 25000;

  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1a1a1a', padding: '12px 24px', color: '#fff' }}>
      <div className="navbar-left" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Pizzería Mamma Mía!</span>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '5px 10px', borderRadius: '4px' }}>
          🍕 Home
        </Link>
        {token ? (
          <>
            <Link to="/profile" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '5px 10px', borderRadius: '4px' }}>
              🔓 Profile
            </Link>
            <Link to="/logout" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '5px 10px', borderRadius: '4px' }}>
              🔒 Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '5px 10px', borderRadius: '4px' }}>
              🔐 Login
            </Link>
            <Link to="/register" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '5px 10px', borderRadius: '4px' }}>
              🔐 Register
            </Link>
          </>
        )}
      </div>

      <div className="navbar-right">
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '5px 12px', borderRadius: '4px' }}>
          🛒 Total: ${total.toLocaleString('es-CL')}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;