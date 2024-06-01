import { Fragment, useEffect } from "react";
import styles from "../public/css/BirthdayPics.module.css"


const VideographyVids = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);




  return (
    <Fragment>

      <div className={styles.w}>
        {Array.from({ length: 48 }).map((_, index) => (
          <div key={index} className={styles.i}></div>
        ))}
        <div className={styles.h}>
          <h1>Trust in the process</h1>
        </div>
      </div>
      <div className={styles.w1}>
        {Array.from({ length: 48 }).map((_, index) => (
          <div key={index} className={styles.i1}></div>
        ))}
        <div className={styles.h1}>
          <h1>Trust in the process</h1>
        </div>
      </div>
      <div className={styles.w2}>
        {Array.from({ length: 48 }).map((_, index) => (
          <div key={index} className={styles.i2}></div>
        ))}
        <div className={styles.h2S}>
          <h1>Trust in the process</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default VideographyVids;
