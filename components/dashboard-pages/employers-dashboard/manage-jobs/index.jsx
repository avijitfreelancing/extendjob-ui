import BreadCrumb from "../../BreadCrumb";
import JobListingsTable from "./components/JobListingsTable";
import MenuToggler from "../../MenuToggler";

const index = () => {
  return (
    <div >
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}
      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Manage jobs!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
