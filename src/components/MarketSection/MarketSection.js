import ProductCard from "./ProductCard";
import styles from "./MarketSection.module.css";
import { useSelector } from "react-redux";

const Market = () => {
  const items = useSelector((state) => state.filteredItemsReducer.items);
  console.log(items);
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
          />
        );
      })}
    </div>
  );
};

export default Market;
