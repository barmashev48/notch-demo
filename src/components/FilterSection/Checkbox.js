import styles from "./Checkbox.module.css";

const CheckBox = ({ category, onFilter }) => {
  return (
    <button
      onClick={() => {
        onFilter(category.categoryName);
      }}
      className={` ${styles.btn} ${category.selected ? styles.selected : null}`}
    >
      <span className={styles.checkbox}></span>
      {category.categoryName}
    </button>
  );
};

export default CheckBox;
