import styles from "./ProductCard.module.css";

import { useEffect, useState } from "react";

const ProductCard = ({ name, category, img, price, id, onAddToBasket }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    onAddToBasket(name, category, quantity, price, id);
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity((prevState) => +prevState + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 0) {
      return;
    }
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
