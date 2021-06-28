import styles from "./Checkbox.module.css";
import { useState } from "react";

const CheckBox = ({ category, onFilter }) => {
  const [selected, setSelected] = useState(false);

  return (
    <p
      onClick={() => {
        onFilter(category);
        setSelected((prevState) => !prevState);
      }}
      className={selected ? styles.selected : null}
    >
      <span className={styles.checkbox}></span>
      {category}
    </p>
  );
};

export default CheckBox;
