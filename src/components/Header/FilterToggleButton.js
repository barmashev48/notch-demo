import styles from "./FilterToggleButton.module.css";

const FilterToggleButton = ({ onToggleFilters, isFilterDisplayed }) => {
  return (
    <button onClick={onToggleFilters} className={styles.btn}>
      <p>
        <span>{isFilterDisplayed ? "Hide" : "Show"}</span> Filters
      </p>
      <img
        src="https://pics.freeicons.io/uploads/icons/png/18860108731537184102-512.png"
        alt="show/hide filters"
      />
    </button>
  );
};

export default FilterToggleButton;
