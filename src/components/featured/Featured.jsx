import React from "react";
import styles from "./featured.module.css"
import Image from "next/image"; 

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Aitch here!</b> Welcome to my mayhem of a blog.
        </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Post Title</h1>
          <p className={styles.postDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quo distinctio illo modi vitae dolor inventore dolorum iure, ex odit adipisci, ipsa maxime aliquam alias explicabo ea neque molestiae rerum.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}; 

export default Featured;