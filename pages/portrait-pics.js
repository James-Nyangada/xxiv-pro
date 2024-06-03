import { Fragment, useEffect } from "react";
import styles from '../public/css/PortraitPics.module.css'

const PortraitPics = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
        <div className={styles.heading}>
            <h1>Portraits</h1>
        </div>
        <p className={styles.subHeading}>
          Scroll to reveal cool animation
        </p>
      <div className={styles.body}>
        
        
        <img className={styles.img} src="assets/portraits/p-1.webp"/>
        <img className={styles.img} src="assets/portraits/p-2.webp"/>
        <img className={styles.img} src="assets/portraits/p-3.webp"/>
        <img className={styles.img} src="assets/portraits/p-4.webp"/>
        <img className={styles.img} src="assets/portraits/p-5.webp"/>
        <img className={styles.img} src="assets/portraits/p-6.webp"/>
  
        <img className={styles.img} src="assets/portraits/p-7.webp"/>
        <img className={styles.img} src="assets/portraits/p-8.webp"/>
        <img className={styles.img} src="assets/portraits/p-9.webp"/>
        <img className={styles.img} src="assets/portraits/p-10.webp"/>
        <img className={styles.img} src="assets/portraits/p-11.webp"/>
        <img className={styles.img} src="assets/portraits/p-12.webp"/>
        <img className={styles.img} src="assets/portraits/p-13.webp"/>
        <img className={styles.img} src="assets/portraits/p-14.webp"/>
        <img className={styles.img} src="assets/portraits/p-15.webp"/>
        <img className={styles.img} src="assets/portraits/p-16.webp"/>
        <img className={styles.img} src="assets/portraits/p-17.webp"/>
        <img className={styles.img} src="assets/portraits/p-18.webp"/>
        <img className={styles.img} src="assets/portraits/p-19.webp"/>
        <img className={styles.img} src="assets/portraits/p-20.webp"/>
        <img className={styles.img} src="assets/portraits/p-21.webp"/>
        <img className={styles.img} src="assets/portraits/p-22.webp"/>
        <img className={styles.img} src="assets/portraits/p-23.webp"/>
        <img className={styles.img} src="assets/portraits/p-28.webp"/>
        <img className={styles.img} src="assets/portraits/p-29.webp"/>
        <img className={styles.img} src="assets/portraits/p-30.webp"/>
        <img className={styles.img} src="assets/portraits/p-40.webp"/>
        <img className={styles.img} src="assets/portraits/p-41.webp"/>
        <img className={styles.img} src="assets/portraits/p-42.webp"/>
  
      </div>
    </Fragment>
  );
};
export default PortraitPics;
