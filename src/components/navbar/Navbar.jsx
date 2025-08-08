import React from "react";
import styles from "./navbar.module.css"; 
import Image from "next/image"; 
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            <Image src="/youtube.png" alt="Twitter" width={24} height={24} />  
            <Image src="/tiktok.png" alt="LinkedIn" width={24} height={24} />
        </div>
        <div className={styles.logo}>H</div>
        <div className={styles.links}>
            <ThemeToggle />
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/about">About</Link>
            <Link className={styles.link} href="/contact">Contact</Link>
            <AuthLinks />
        </div>
    </div>
  );
};

export default Navbar;
// This is a simple Navbar component for a blog application.
// It contains a title and a list of navigation links.  