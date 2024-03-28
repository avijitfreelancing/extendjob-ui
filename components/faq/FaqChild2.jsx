const FaqChild = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header">
            <button
              className="acc-btn accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
            >
            Children's Online Privacy Protection Act Compliance
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <div className="content">
                <p>
                We are consistent with the prerequisites of COPPA (Children's
                Online Privacy Protection Act), we don't gather any data from
                anybody under 13 years old. Our site, items, and
                administrations are completely coordinated to individuals who
                are in any event 13 years of age or more established.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            Changes to our Privacy Policy
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                If we decide to change our privacy policy, we will post those
                changes on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            How long we retain your information?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                At the point when you register for our site, we cycle and keep
                your information we have about you however long you don't
                erase the record or withdraw yourself (subject to laws and
                guidelines).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
            What we don’t do with your data?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                We don't and will never share, unveil, sell, or in any case
                give your information to different organizations for the
                promoting of their items or administrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqChild;
