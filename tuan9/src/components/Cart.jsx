import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../features/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const quantityRef = useRef();

  const handleAdd = () => {
    const name = nameRef.current.value;
    const quantity = parseInt(quantityRef.current.value);
    if (name && quantity > 0) {
      dispatch(addItem({ id: Date.now(), name, quantity }));
      nameRef.current.value = '';
      quantityRef.current.value = '';
    }
  };

  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <input ref={nameRef} placeholder="Item name" />
      <input ref={quantityRef} type="number" placeholder="Quantity" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => dispatch(removeItem(item.id))}>X</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))
              }
              style={{ width: 50, marginLeft: 10 }}
            />
          </li>
        ))}
      </ul>
      <p>Total items: {total}</p>
    </div>
  );
}
