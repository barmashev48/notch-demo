import ProductCard from "./ProductCard";
import styles from "./MarketSection.module.css";

const Market = ({ items, onAddToBasket }) => {
  return (
    <div className={styles.market}>
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            img={item.img}
            price={item.price}
            onAddToBasket={onAddToBasket}
          />
        );
      })}
    </div>
  );
};

export default Market;
