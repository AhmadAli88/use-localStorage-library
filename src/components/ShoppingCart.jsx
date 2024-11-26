import useLocalStorage from 'use-local-storage';

const ShoppingCart = () => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const addItem = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <button onClick={() => addItem('Apple')}>Add Apple</button>
      <button onClick={() => addItem('Banana')}>Add Banana</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
