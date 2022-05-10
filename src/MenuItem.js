import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ title }) => {
  return (
    <div className={styles.menuItem}>
      <h4>{title}</h4>
    </div>
  );
};

export default MenuItem;
