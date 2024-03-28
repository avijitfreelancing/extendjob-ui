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
              What information do we collect?
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
                  We gather data from you when you register on our site, submit
                  a request, buy any services, react to an overview, or round
                  out a structure. At the point when requesting any assistance
                  or enrolling on our site, as suitable, you might be approached
                  to enter your: name, email address, or telephone number. You
                  may, nonetheless, visit our site anonymously.
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
              How do we protect your information?
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
                  All provided delicate/credit data is sent through Stripe.
                  After an exchange, your private data (credit cards, social
                  security numbers, financials, and so on) won't be put away on
                  our workers.
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
              Do we disclose any information to outside parties?
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
                  We don't sell, exchange, or in any case move to outside
                  gatherings by and by recognizable data. This does exclude
                  confided in outsiders who help us in working our site, leading
                  our business, or adjusting you, since those gatherings consent
                  to keep this data private. We may likewise deliver your data
                  when we accept discharge is suitable to follow the law,
                  implement our site strategies, or ensure our own or others'
                  rights, property, or wellbeing.
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
