"use client";

import FooterDefault from "../footer/common-footer";
import Breadcrumb from "../common/Breadcrumb";
import FilterJobBox from "./FilterJobBox";

const index = () => {
  return (
    <>
      <span className="header-span" />

      <Breadcrumb title="Find Jobs" meta="Jobs" />
      {/* <!--End Breadcrumb Start--> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="filter-sidebar"
              aria-labelledby="offcanvasLabel"
            >
              <div className="filters-column hide-left">
                {/* <FilterSidebar /> */}
              </div>
            </div>
            {/* <!-- End Filters Column --> */}

            <div className="content-column col-lg-12">
              <FilterJobBox />
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
