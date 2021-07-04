import Checkbox from "./Checkbox";
import styles from "./FilterSection.module.css";

const FilterCategory = ({ categories, onFilter, onToggleFilters }) => {
  return (
    <div className={styles.filterSection}>
      <button className={styles.closeFiltersBtn} onClick={onToggleFilters}>
        <img
          src="https://image.flaticon.com/icons/png/512/1828/1828778.png"
          alt="close button"
        />
      </button>
      {categories.map((category, index) => {
        return <Checkbox key={index} onFilter={onFilter} category={category} />;
      })}
    </div>
  );
};

export default FilterCategory;
