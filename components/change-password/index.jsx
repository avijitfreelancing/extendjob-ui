import BreadCrumb from "@/components/bread-crumb/BreadCrumb";

const index = () => {
  return (
      <section className="user-dashboard">
          <div className="dashboard-outer">
              <BreadCrumb title="Change Password!" />
              <div className="ls-widget">
                  <div className="widget-title">
                      <h4>Change Password</h4>
                  </div>

                  <div className="widget-content">
                      <form className="default-form">
                          <div className="row">
                              {/* <!-- Input --> */}
                              <div className="form-group col-lg-7 col-md-12">
                                  <label>Old Password </label>
                                  <input type="password" name="name" required />
                              </div>

                              {/* <!-- Input --> */}
                              <div className="form-group col-lg-7 col-md-12">
                                  <label>New Password</label>
                                  <input type="password" name="name" required />
                              </div>

                              {/* <!-- Input --> */}
                              <div className="form-group col-lg-7 col-md-12">
                                  <label>Confirm Password</label>
                                  <input type="password" name="name" required />
                              </div>

                              {/* <!-- Input --> */}
                              <div className="form-group col-lg-6 col-md-12">
                                  <button type="submit" className="theme-btn btn-style-one">
                                      Update
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
              {/* <!-- Ls widget --> */}
          </div>
          {/* End dashboard-outer */}
      </section>
  );
};

export default index;
