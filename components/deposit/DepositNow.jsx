import BreadCrumb from "@/components/bread-crumb/BreadCrumb";

const index = () => {
    return (
        <section className="user-dashboard">
            <div className="dashboard-outer">
                <BreadCrumb title="Deposit Method!" />
                {/* breadCrumb */}
                {/* Collapsible sidebar button */}
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Ls widget --> */}
                        <div className="ls-widget">
                            <div className="tabs-box">
                                <div className="widget-title">
                                    <h4>Contact Information</h4>
                                </div>
                                {/* End widget-title */}
                                <div className="widget-content">
                                    <form className="default-form">
                                        <div className="row">
                                            {/* <!-- Input --> */}
                                            <div className="form-group col-lg-12 col-md-12">
                                                <label>Select Gateway</label>
                                                <select className="chosen-single form-select" required>
                                                    <option>PayPal</option>
                                                </select>
                                            </div>

                                            {/* <!-- Input --> */}
                                            <div className="form-group col-lg-12 col-md-12">
                                                <label>Amount</label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    placeholder="0.00"
                                                    required
                                                />
                                            </div>
                                            {/* <!-- Input --> */}
                                            <div className="form-group col-lg-12 col-md-12">
                                                Limit
                                            </div>
                                            {/* End MapBox */}
                                            {/* <!-- Input --> */}
                                            <div className="form-group col-lg-12 col-md-12">
                                                <button type="submit" className="theme-btn btn-style-one">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Ls widget --> */}
                    </div>
                </div>
                {/* End .row */}
            </div>
            {/* End dashboard-outer */}
        </section>
    );
};

export default index;