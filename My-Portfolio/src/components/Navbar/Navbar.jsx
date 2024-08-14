import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

 export const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">Portofolio</a>
    <div className={styles.menu}>
        <img 
        className={styles.menuBtn} 
        src={ 
            MenuOpen 
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
        } 
        alt="menu-button"
        onClick={() => setMenuOpen(!MenuOpen)}
        />
        <ul className={`${styles.menuItems} ${MenuOpen && styles.MenuOpen}`}
        onClick={() => setMenuOpen(false)}
        >
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  </nav>
  );
};

