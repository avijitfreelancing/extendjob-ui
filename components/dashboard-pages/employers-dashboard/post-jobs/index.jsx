import BreadCrumb from "../../BreadCrumb";
import PostJobSteps from "./components/PostJobSteps";
import PostBoxForm from "./components/PostBoxForm";
import MenuToggler from "../../MenuToggler";

const index = () => {
  return (
    <div>
      <span className="header-span"></span>
      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Job Category" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Post Job</h4>
                  </div>

                  <div className="widget-content">
                    <PostJobSteps />
                    {/* End job steps form */}
                    <PostBoxForm />
                    {/* End post box form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
