import TermsText from "./TermsText";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>
      <section className="tnc-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Refund Policy</h2>
            <div className="text">Home / Refund Policy</div>
          </div>
          {/* End sec-title */}
          <TermsText />
        </div>
      </section>
    </>
  );
};

export default index;
