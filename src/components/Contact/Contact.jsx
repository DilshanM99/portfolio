import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to contact anytime</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/mobileIcon.png")} alt="email icon" />
          <a href="tel:0779992759">077 999 2759</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:dilshan1999madura@gmail.com">
            dilshan1999madura@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a  href="https://www.linkedin.com/in/dilshan-madhuranga-423642245" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/dilshan-madhuranga-423642245</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/DilshanM99" target="_blank" rel="noopener noreferrer">https://github.com/DilshanM99</a>
        </li>
      </ul>
    </footer>
  );
};
