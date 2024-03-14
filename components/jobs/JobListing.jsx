"use client";

import dynamic from "next/dynamic";
import FilterJobBox from "./FilterJobBox";
import Breadcrumb from "../common/Breadcrumb";

const JobListing = () => {
  return (
    <>
      <Breadcrumb title="Find Jobs" meta="Jobs" />
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
                            {/*<FilterSidebar />*/}
                        </div>
                    </div>
                    {/* End filter column for tablet and mobile devices */}

                    <div className="filters-column hidden-1023 col-lg-4 col-md-12 col-sm-12">
                        {/*<FilterSidebar />*/}
                    </div>
                    {/* <!-- End Filters Column for destop and laptop --> */}

                    <div className="content-column col-lg-8 col-md-12 col-sm-12">
                        <div className="ls-outer">
                            {/*<FilterJobsBox />*/}
                            {/* <!-- ls Switcher --> */}
                        </div>
                    </div>
                    {/* <!-- End Content Column --> */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
      {/*<section className="ls-section">*/}
      {/*  <div className="auto-container">*/}
      {/*    <div className="row">*/}
      {/*      <div*/}
      {/*        className="offcanvas offcanvas-start"*/}
      {/*        tabIndex="-1"*/}
      {/*        id="filter-sidebar"*/}
      {/*        aria-labelledby="offcanvasLabel"*/}
      {/*      >*/}
      {/*        <div className="filters-column hide-left">*/}
      {/*          /!* <FilterSidebar /> *!/*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="content-column col-lg-12">*/}
      {/*        <FilterJobBox />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
};

export default dynamic(() => Promise.resolve(JobListing), { ssr: false });
