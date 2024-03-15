import Address from "./Address";
import ContactForm from "./ContactForm";
import MapBox from "./MapBox";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>
      {/* End MobileMenu */}
      <section className="map-section">
        <div className="map-outer">
          <MapBox />
        </div>
      </section>
      <section className="contact-section">
        <div className="auto-container">
          <div className="upper-box">
            <div className="row">
              <Address />
            </div>
            {/* End .row */}
          </div>
          {/* <!-- Contact Form --> */}
          <div className="contact-form default-form">
            <h3>Leave A Message</h3>
            <ContactForm />
            {/* <!--Contact Form--> */}
          </div>
          {/* <!--End Contact Form --> */}
        </div>
      </section>
    </>
  );
};

export default index;
