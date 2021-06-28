import Checkbox from "../Checkbox/Checkbox";
import styles from "./FilterCategory.module.css";

const FilterCategory = ({ categories, onFilter }) => {
  return (
    <div className={styles.filterSection}>
      <Checkbox onFilter={onFilter} category={"Show All"} />
      {categories.map((category) => {
        return <Checkbox onFilter={onFilter} category={category} />;
      })}
    </div>
  );
};

export default FilterCategory;
