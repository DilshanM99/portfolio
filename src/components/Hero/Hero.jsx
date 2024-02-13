import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Dilshan Madhuranga</h1>
        <p className={styles.description}>
          I'm not just a web developer, I'm your digital sorcerer, conjuring
          captivating online experiences with every line of code. With my
          expertise in coding and design, I bring your visions to life.
        </p>
        <a
          href="maito:dilshan1999madura@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Dilshan Madhuranga"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
