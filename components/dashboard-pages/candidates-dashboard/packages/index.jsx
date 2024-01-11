import BreadCrumb from "../../BreadCrumb";
import PackageDataTable from "./components/PackageDataTable";
import MenuToggler from "../../MenuToggler";

const index = () => {
  return (
    <div>
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      {/* End Login Popup Modal */}

      {/* End Header */}

      {/* End MobileMenu */}

      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Packages!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>My Packages</h4>
                  </div>
                  {/* End widget-title */}

                  <div className="widget-content">
                    <div className="table-outer">
                      <PackageDataTable />
                    </div>
                  </div>
                  {/* End widget-content */}
                </div>
              </div>
              {/* <!-- Ls widget --> */}
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
