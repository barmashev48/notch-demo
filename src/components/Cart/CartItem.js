import styles from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ quantity, price, name, category, id }) => {
  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(cartActions.addItem({ name, category, price, id }));
  };

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <li className={styles.cartItem}>
      <p>
        {category}, {name}
      </p>
      <span>${quantity * +price}</span>
      <div>
        <button onClick={decreaseQuantityHandler}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantityHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
