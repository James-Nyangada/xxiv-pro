import { Fragment, useEffect } from "react";
import styles from "../public/css/EventPics.module.css";


const EventPics = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <div className={styles.heading}>Events</div>
      <p>Take a look at the most interesting events</p>
      <div className={styles.body}>
        <img className={styles.img} src="assets/events/event-1.jpg"/>
        <img className={`${styles.img2}` } src="assets/events/event-2.jpg"/>
        
        <img className={styles.img} src="assets/events/event-3.jpg"/>
        <img className={`${styles.img2}` } src="assets/events/event-4.jpg"/>
        
        <img className={styles.img} src="assets/events/event-5.jpg"/>
        <img className={`${styles.img2}` } src="assets/events/event-6.jpg"/>
        
        <img className={styles.img} src="assets/events/event-7.jpg"/>
        <img className={`${styles.img2}` } src="assets/events/event-8.jpg"/>
        
        <img className={styles.img} src="assets/events/event-9.webp"/>
        
        
      </div>
      

    </Fragment>
  );
};

export default EventPics;
