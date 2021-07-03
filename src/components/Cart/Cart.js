import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ onToggleCart, cart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalReducer = cart.reduce(
      (acc, currVal) => acc + currVal.quantity * +currVal.price,
      0
    );
    setTotal(totalReducer);
  }, [cart]);
  return (
    <div className={styles.cart}>
      <button onClick={onToggleCart}>
        <img
          src="https://image.flaticon.com/icons/png/512/1828/1828778.png"
          alt="close button"
        />
      </button>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => {
          if (item.quantity === 0) {
            return null;
          }
          return (
            <CartItem
              key={index}
              quantity={item.quantity}
              price={item.price}
              category={item.category}
              name={item.name}
            />
          );
        })}
      </ul>
      <p>Total: ${total > 0 ? total : 0}</p>
    </div>
  );
};

export default Cart;
