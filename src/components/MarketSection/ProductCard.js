import styles from "./ProductCard.module.css";
import { useEffect, useState } from "react";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ name, category, img, price, id }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(cartActions.addItem({ name, category, price, id }));
    setQuantity((prevState) => +prevState + 1);
  };

  const decreaseQuantity = () => {
    dispatch(cartActions.removeItem(id));
    setQuantity((prevState) => +prevState - 1);
  };

  return (
    <div className={styles.card}>
      <h2>XYZ Store</h2>
      <img src={img} alt={`${name} ${category}`} />
      <p>
        {category}, {name}
      </p>
      <p className={styles.price}>${price}</p>
      <p className={styles.quantity}>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity.length === 0 ? "Quantity" : quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </p>
    </div>
  );
};

export default ProductCard;
