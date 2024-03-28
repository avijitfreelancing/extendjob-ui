import Breadcrumb from "@/components/common/Breadcrumb";
import FaqChild from "./FaqChild";
import FaqChild2 from "./FaqChild2";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Breadcrumb title="Faq's" meta="Faq's" />
      {/* <!--End Page Title--> */}

      <section className="faqs-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Frequently Asked Questions</h2>
            <div className="text">Home / Faq</div>
          </div>

          <h3>Privacy Policy</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box">
            <FaqChild />
          </ul>
          
           {/*  <h3>Suggestions</h3> */}
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box mb-0">
            <FaqChild2 />
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
