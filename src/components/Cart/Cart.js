import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = ({ onToggleCart, cart }) => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);

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
        {cartItems.length === 0 && <p>Your cart is empty!</p>}
        {cartItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              id={item.id}
              quantity={item.quantity}
              price={item.price}
              category={item.category}
              name={item.name}
            />
          );
        })}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
