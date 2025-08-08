import React from "react";
import styles from "./featured.module.css"
import Image from "next/image"; 
import Link from "next/link";

const getLatestPost = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?latest=true`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch latest post");
  }

  return res.json();
};

const Featured = async() => {
  const data = await getLatestPost();
  const post = data.post;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Aitch here!</b> You have found my blog.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={post.img || "/hero.png"} alt={post.title} fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          
          <h2 href={`/posts/${post.slug}`} className={styles.postTitle}>{post.title}</h2>
          <div className={styles.postDescription} dangerouslySetInnerHTML={{ __html: post?.desc.substring(0,500)}} />
          <button href={`/posts/${post.slug}`} className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}; 

export default Featured;