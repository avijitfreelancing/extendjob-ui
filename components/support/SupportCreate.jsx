import BreadCrumb from "@/components/bread-crumb/BreadCrumb";

const index = () => {
    return (
        <section className="user-dashboard">
            <div className="dashboard-outer">
                <BreadCrumb title="Support Create!" />
                {/* breadCrumb */}
                {/* Collapsible sidebar button */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ls-widget">
                            <div className="tabs-box">
                                <div className="widget-title">
                                    <h4>Support Create</h4>
                                </div>
                                <div className="widget-content">
                                    <form action="#" className="default-form">
                                        <div className="row">
                                            {/* <!-- Input --> */}
                                            <div className="form-group col-lg-6 col-md-12">
                                                <label>Name</label>
                                                <input type="text" readOnly name="name" placeholder="Jerome" required />
                                            </div>
                                            {/* <!-- Input --> */}
                                            <div className="form-group col-lg-6 col-md-12">
                                                <label>Email</label>
                                                <input readOnly type="email" name="email" placeholder="example@gmailcom" required />
                                            </div>
                                            {/* <!-- Input --> */}
                                            <div className="form-group col-lg-6 col-md-12">
                                                <label>Subject</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12">
                                                <label>Priority</label><span className={'text-danger'}> *</span>
                                                <select className="chosen-single form-select" required>
                                                    <option>High</option>
                                                    <option>Low</option>
                                                </select>
                                            </div>
                                            {/* <!-- About Company --> */}
                                            <div className="form-group col-lg-12 col-md-12">
                                                <label>Message</label>
                                                <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12">
                                                <label>Attachments <span className={'text-danger'}>Max 5 files can be uploaded. Maximum upload size is 1536M</span></label>
                                                <input
                                                    type="file"
                                                    name="file"
                                                    required
                                                />
                                                <br/>
                                                <label>Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx</label>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12">
                                                <button type="submit" className="theme-btn btn-style-one">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End dashboard-outer */}
        </section>
    );
};

export default index;