import FilterToggleButton from "./FilterToggleButton";
import CartToggleButton from "./CartToggleButton";
import styles from "./Header.module.css";

const Header = ({ onToggleFilters, onToggleCart, isFilterDisplayed }) => {
  return (
    <header className={styles.header}>
      <img
        src="https://storage.googleapis.com/chefhero-storage/static/fe-buyer/images/notch-primary-logo.svg"
        alt="notch logo"
        className={styles.logo}
      />
      <div className={styles.controls}>
        <FilterToggleButton
          onToggleFilters={onToggleFilters}
          isFilterDisplayed={isFilterDisplayed}
        />
        <CartToggleButton onToggleCart={onToggleCart} />
      </div>
    </header>
  );
};

export default Header;
