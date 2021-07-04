import Header from "./components/Header/Header";
import MarketSection from "./components/MarketSection/MarketSection";
import FilterSection from "./components/FilterSection/FilterSection";
import Cart from "./components/Cart/Cart";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import DATA from "./DATA";

function App() {
  const [allItems, setAllItems] = useState(DATA);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [cart, setCart] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [isFilterDisplayed, setIsFilterDisplayed] = useState(true);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

  //dynamically set the category filters
  useEffect(() => {
    const allCategories = allItems.map((item) => {
      return { categoryName: item.category, selected: false };
    });
    const noDuplicateCategories = allCategories.filter(
      (item, index, arr) =>
        index ===
        arr.findIndex(
          (el) =>
            el.categoryName === item.categoryName &&
            el.selected === item.selected
        )
    );
    const filtersToDisplay = [
      { categoryName: "Show All", selected: true },
      ...noDuplicateCategories,
    ];
    setCategoryFilters(filtersToDisplay);
  }, []);

  const onToggleFilters = () => {
    setIsFilterDisplayed((prevState) => !prevState);
  };

  const onToggleCart = () => {
    setIsCartDisplayed((prevState) => !prevState);
  };

  const onFilterByCategory = (category) => {
    if (category === "Show All") {
      setFilteredItems(allItems);
      const newFilters = categoryFilters.map((item) => {
        if (item.categoryName === "Show All") {
          return { categoryName: item.categoryName, selected: true };
        }
        return { categoryName: item.categoryName, selected: false };
      });
      setCategoryFilters(newFilters);
      return;
    }
    const newFilters = categoryFilters.map((item) => {
      if (category === item.categoryName) {
        return { categoryName: item.categoryName, selected: true };
      }
      return { categoryName: item.categoryName, selected: false };
    });
    setCategoryFilters(newFilters);
    const newFilteredItems = allItems.filter((item) => {
      return item.category === category;
    });
    setFilteredItems(newFilteredItems);
  };

  const onAddToBasket = (name, category, quantity, price, id) => {
    if (cart.some((item) => id === item.id)) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      );
      setCart(newCart);
      return;
    }

    const newItemInCart = { name, category, quantity, price, id };
    setCart((prevState) => [...prevState, newItemInCart]);
  };

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Header
          onToggleFilters={onToggleFilters}
          isFilterDisplayed={isFilterDisplayed}
          onToggleCart={onToggleCart}
        />
        <main className={styles.main}>
          {isFilterDisplayed && (
            <FilterSection
              categories={categoryFilters}
              onFilter={onFilterByCategory}
              onToggleFilters={onToggleFilters}
            />
          )}

          {isCartDisplayed && <Cart onToggleCart={onToggleCart} cart={cart} />}
          <MarketSection items={filteredItems} onAddToBasket={onAddToBasket} />
        </main>
      </div>
    </div>
  );
}

export default App;
