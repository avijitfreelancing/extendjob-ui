import JobCategoryTable from "./JobCategoryTable";
import MenuToggler from "../MenuToggler";

const index = () => {
  return (
    <div>
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      {/* End Login.jsx Popup Modal */}

      {/* End Header */}

      {/* End MobileMenu */}

      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
         
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobCategoryTable />
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
