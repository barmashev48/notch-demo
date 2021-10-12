import styles from "./CartToggleButton.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CartToggleButton = ({ onToggleCart }) => {
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  const [isBtnAnimated, setIsBtnAnimated] = useState(false);
  const cartItems = useSelector((state) => state.cartReducer.items);
  const btnStyles = `${styles.btn} ${isBtnAnimated ? styles.bump : ""}`;

  useEffect(() => {
    setIsBtnAnimated(true);
    const timer = setTimeout(() => {
      setIsBtnAnimated(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button onClick={onToggleCart} className={btnStyles}>
      <img
        src="https://storage.googleapis.com/chefhero-storage/static/fe-buyer/images/icon_cart.svg"
        alt="your shopping cart"
      />
      <span className={styles.text}>Your cart</span>
      <span className={styles.totalQuantity}>{totalQuantity}</span>
    </button>
  );
};

export default CartToggleButton;
