import React from 'react';

const Profile = () => {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>Mi Perfil</h2>
      <p style={{ margin: '15px 0', color: '#555' }}>Email: <strong>usuario@pizzeria.com</strong></p>
      <button 
        style={{ background: '#d9534f', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}
        onClick={() => alert('Sesión cerrada')}
      >
        Cerrar Sesión 🚪
      </button>
    </div>
  );
};

export default Profile;