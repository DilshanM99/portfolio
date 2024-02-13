import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Dilshan Madhuranga"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Hi there! I'm Dilshan Madhuaranga, a web developer fueled by a
                passion for creating awesome online experiences. I graduated
                with a degree in IT from the University of Jaffna and now work
                as a web developer. I love coding, designing, and making
                websites that stand out. Let's build something amazing together!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
