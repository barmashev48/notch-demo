import Checkbox from "./Checkbox";
import styles from "./FilterSection.module.css";

const FilterCategory = ({ categories, onFilter }) => {
  return (
    <div className={styles.filterSection}>
      {categories.map((category, index) => {
        return <Checkbox key={index} onFilter={onFilter} category={category} />;
      })}
    </div>
  );
};

export default FilterCategory;
