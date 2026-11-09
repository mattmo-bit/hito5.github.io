import React, { useState } from 'react';
import { pizzaCart } from '../data/pizzas'; // 👈 Asegúrate de usar llaves { pizzaCart }

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseCount = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    setCart(updatedCart);
  };

  
  const decreaseCount = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      setCart(updatedCart);
    } else {
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="cart-container">
      <h2>Detalles del pedido:</h2>
      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <span className="cart-item-name">{item.name}</span>
            </div>
            <div className="cart-item-actions">
              <span className="cart-item-price">${item.price.toLocaleString('es-CL')}</span>
              <button className="btn-qty btn-minus" onClick={() => decreaseCount(index)}>-</button>
              <span className="cart-item-count">{item.count}</span>
              <button className="btn-qty btn-plus" onClick={() => increaseCount(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${total.toLocaleString('es-CL')}</h3>
      </div>
      <button className="btn-pay">Pagar</button>
    </div>
  );
};

export default Cart;