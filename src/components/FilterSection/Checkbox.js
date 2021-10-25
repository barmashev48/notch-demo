import styles from "./Checkbox.module.css";
import { filteredItemsActions } from "../../store/filteredItemsSlice";
import { useDispatch } from "react-redux";

const CheckBox = ({ category }) => {
  const dispatch = useDispatch();

  const onSelectFilter = () => {
    if (category.selected) {
      dispatch(filteredItemsActions.onFilterByCategory("Show All"));
      return;
    }
    dispatch(filteredItemsActions.onFilterByCategory(category.categoryName));
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
