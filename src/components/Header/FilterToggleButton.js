import styles from "./FilterToggleButton.module.css";

const FilterToggleButton = ({ onToggleFilters, isFilterDisplayed }) => {
  return (
    <button onClick={onToggleFilters} className={styles.btn}>
      <p>
        <span>{isFilterDisplayed ? "Hide" : "Show"}</span> Filters
      </p>
      <img
        src="https://www.pngitem.com/pimgs/m/285-2859045_filter-filters-filters-icon-png-transparent-png.png"
        alt="show/hide filters"
      />
    </button>
  );
};

export default FilterToggleButton;
