import BreadCrumb from "../../BreadCrumb";
import JobFavouriteTable from "./components/JobFavouriteTable";
import MenuToggler from "../../MenuToggler";

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
          <BreadCrumb title="Shortlisted jobs!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobFavouriteTable />
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
