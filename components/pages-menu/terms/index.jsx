import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import TermsText from "./TermsText";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <section className="tnc-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Terms and Conditions</h2>
            <div className="text">Home / Terms and Conditions</div>
          </div>
          {/* End sec-title */}
          <TermsText />
        </div>
      </section>
      {/* <!-- End TNC Section --> */}
    </>
  );
};

export default index;
