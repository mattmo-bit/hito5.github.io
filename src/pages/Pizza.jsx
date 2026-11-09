import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState({});

  const obtenerPizza = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

  useEffect(() => {
    obtenerPizza();
  }, []);

  return (
    <div className="pizza-detail-container" style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center' }}>
      {pizza.name ? (
        <div className="pizza-detail-card" style={{ maxWidth: '600px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <img src={pizza.img} alt={pizza.name} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '6px' }} />
          <h2 style={{ margin: '15px 0 10px 0' }}>{pizza.name}</h2>
          <p style={{ color: '#555', fontSize: '0.95rem' }}>{pizza.desc}</p>
          <h4 style={{ margin: '15px 0 5px 0' }}>Ingredientes:</h4>
          <ul style={{ paddingLeft: '20px', margin: '0 0 15px 0' }}>
            {pizza.ingredients && pizza.ingredients.map((ing, index) => (
              <li key={index}>🍕 {ing}</li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Precio: ${pizza.price ? pizza.price.toLocaleString('es-CL') : ''}</span>
            <button style={{ background: '#1a1a1a', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
              Añadir 🛒
            </button>
          </div>
        </div>
      ) : (
        <p>Cargando información de la pizza...</p>
      )}
    </div>
  );
};

export default Pizza;