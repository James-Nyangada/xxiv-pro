import { Fragment, useEffect } from "react";
import styles from '../public/css/Videography.module.css'

const BirthdayPics = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <div className={styles.external}>
        <div className={styles.heading}>Birthday Pictures</div>
        <p className={styles.subHeading}>Take a look at the most interesting birthday pictures</p>
        <p className={styles.subHeading}>NB: Scroll horizonatly and Feel the album</p>
          <div className={styles.horizontalScrollWrapper}>
              <div className={`${styles.imgWrapper} ${styles.slower}`}>
                <a target="_blank" rel="noopener">
                  <img src="assets/birthday/birthday-1.jpg" alt=""/>
                </a>
              </div>

              
              <div className={`${styles.imgWrapper} ${styles.faster}`}>
                <a target="_blank" rel="noopener">
                  <img src="assets/birthday/birthday-2.webp" alt=""/>
                </a>
              </div>

              <div className={`${styles.imgWrapper} ${styles.slower} ${styles.verticle}`}>
                <a target="_blank" rel="noopener">
                  <img src="assets/birthday/birthday-3.webp" alt=""/>
                </a>
              </div>


              <div className={`${styles.imgWrapper} ${styles.slower} ${styles.slowerDown}`}>
                <a target="_blank" rel="noopener">
                  <img src="assets/birthday/birthday-4.webp" alt=""/>
                </a>
              </div>

              <div className={`${styles.imgWrapper}`}>
                <a target="_blank" rel="noopener">
                  <img src="assets/birthday/birthday-5.webp" alt=""/>
                </a>
              </div>

              <div className={`${styles.imgWrapper}  ${styles.slower}` }>
                <a target="_blank" rel="noopener">
                  <img src="assets/birthday/birthday-6.webp" alt=""/>
                </a>
              </div>

              <div className={`${styles.imgWrapper}  ${styles.faster1}` }>
                <a target="_blank" rel="noopener">
                  <img src="assets/birthday/birthday-7.webp" alt=""/>
                </a>
              </div>

              <div className={`${styles.imgWrapper} ${styles.slower}  ${styles.slower2}` }>
                <a target="_blank" rel="noopener">
                  <img src="assets/birthday/birthday-8.webp" alt=""/>
                </a>
              </div>

             


          </div>
      </div>
    </Fragment>
  );
};
export default BirthdayPics;
