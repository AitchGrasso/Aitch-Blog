import React from "react";
import styles from "./cardList.module.css"

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <div className={styles.card}>
        <h2>Card Title 1</h2>
        <p>Card description goes here.</p>
      </div>
      <div className="card">
        <h2>Card Title 2</h2>
        <p>Card description goes here.</p>
      </div>
      <div className="card">
        <h2>Card Title 3</h2>
        <p>Card description goes here.</p>
      </div>
    </div>
  );
};

export default CardList;
