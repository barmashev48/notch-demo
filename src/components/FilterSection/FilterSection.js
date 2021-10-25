import Checkbox from "./Checkbox";
import styles from "./FilterSection.module.css";
import { useSelector } from "react-redux";

const FilterCategory = ({ onFilter, onToggleFilters }) => {
  const categories = useSelector((state) => state.filteredItemsReducer.filters);
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
