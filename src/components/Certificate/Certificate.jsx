import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

const Certificate = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Certificates</h2>
      <Slider {...settings}>
        <div>
          <img
            src={getImageUrl("certificates/certificate-1.png")}
            alt="certificate"
            className={styles.certificatemage}
          />
        </div>
        <div>
          <img
            src={getImageUrl("certificates/certificate-2.jpeg")}
            alt="certificate"
            className={styles.certificatemage}
          />
        </div>
        <div>
          <img
            src={getImageUrl("certificates/certificate-3.jpg")}
            alt="certificate"
            className={styles.certificatemage}
          />
        </div>
        <div>
          <img
            src={getImageUrl("certificates/certificate-4.png")}
            alt="certificate"
            className={styles.certificatemage}
          />
        </div>
        <div>
          <img
            src={getImageUrl("certificates/certificate-5.png")}
            alt="certificate"
            className={styles.certificatemage}
          />
        </div>
      </Slider>
    </section>
  );
};

export default Certificate;
