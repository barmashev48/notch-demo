import styles from "./Checkbox.module.css";

const CheckBox = ({ category, onFilter }) => {
  const onSelectFilter = () => {
    if (category.selected) {
      onFilter("Show All");
      return;
    }
    onFilter(category.categoryName);
  };
  return (
    <button
      onClick={onSelectFilter}
      className={` ${styles.btn} ${category.selected ? styles.selected : null}`}
    >
      <span className={styles.checkbox}></span>
      {category.categoryName}
    </button>
  );
};

export default CheckBox;
