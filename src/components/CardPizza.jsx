import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '300px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <img src={img} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>{name}</h3>
        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '10px 0' }} />
        <p style={{ fontSize: '0.85rem', color: '#666', margin: '5px 0' }}>Ingredientes:</p>
        <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: '#444', margin: '0 0 15px 0' }}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '10px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Precio: ${price.toLocaleString('es-CL')}</span>
          <div>
            <button style={{ background: 'transparent', border: '1px solid #333', padding: '6px 10px', marginRight: '5px', borderRadius: '4px', cursor: 'pointer' }}>Ver Más 👀</button>
            <button style={{ background: '#1a1a1a', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;