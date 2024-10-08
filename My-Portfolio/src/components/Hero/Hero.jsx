import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'


export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Evneet </h1>
        <p className={styles.description}>
        I'm a full-stack web developer with good hold on various coding languages.
        Reach out if you'd like to learn more!
        </p>
        <a href="mailto:evneetkaur19@gmail.com" className={styles.contactBtn}>
            Contact Me
        </a>
    </div>
    <img src={getImageUrl("hero/heroImage2.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  );
};
