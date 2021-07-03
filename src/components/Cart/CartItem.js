import styles from "./CartItem.module.css";

const CartItem = ({ quantity, price, name, category }) => {
  return (
    <li className={styles.cartItem}>
      <span>{quantity}</span>
      {category}, {name}
      <span>${quantity * +price}</span>
    </li>
  );
};

export default CartItem;
