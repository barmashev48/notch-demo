import Header from "./components/Header/Header";
import MarketSection from "./components/MarketSection/MarketSection";
import FilterSection from "./components/FilterSection/FilterSection";
import Cart from "./components/Cart/Cart";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { filteredItemsActions } from "./store/filteredItemsSlice";
import { useDispatch } from "react-redux";
import DATA from "./DATA";

function App() {
  const dispatch = useDispatch();

  const [isFilterDisplayed, setIsFilterDisplayed] = useState(true);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

  //dynamically set the category filters
  useEffect(() => {
    dispatch(filteredItemsActions.setFilters());
  }, []);

  const onToggleFilters = () => {
    setIsFilterDisplayed((prevState) => !prevState);
  };

  const onToggleCart = () => {
    setIsCartDisplayed((prevState) => !prevState);
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
            <FilterSection onToggleFilters={onToggleFilters} />
          )}

          {isCartDisplayed && <Cart onToggleCart={onToggleCart} />}
          <MarketSection />
        </main>
      </div>
    </div>
  );
}

export default App;
