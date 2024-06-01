const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Working with Gabriel was an absolute pleasure! Their keen eye for detail and unwavering commitment to capturing the perfect shot resulted in stunning photographs and marketing videos that exceeded my expectations."
              </span>
              <span className="person">Sean Mwaniki-AKA-@sean.mmg</span>
              <span className="job">Actor || Musician  || Dancer</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I cannot recommend Gabu enough! Their professionalism, creativity, and passion for their craft truly shine through in every project they undertake. From start to finish, Gabriel goes above and beyond to ensure their clients' visions are brought to life with breathtaking imagery and captivating videos."
              </span>
              <span className="person">Christine Mumbui-AKA- @christine_mbs</span>
              <span className="job">Content Creator</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
