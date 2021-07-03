import styles from "./CartToggleButton.module.css";

const CartToggleButton = ({ onToggleCart }) => {
  return (
    <button onClick={onToggleCart} className={styles.btn}>
      <img
        src="https://storage.googleapis.com/chefhero-storage/static/fe-buyer/images/icon_cart.svg"
        alt="your shopping cart"
      />
    </button>
  );
};

export default CartToggleButton;
