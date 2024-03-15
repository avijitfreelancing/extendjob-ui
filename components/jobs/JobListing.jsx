"use client";

import dynamic from "next/dynamic";
import FilterJobBox from "./FilterJobBox";
import Breadcrumb from "../common/Breadcrumb";

const JobListing = () => {
  return (
    <>
        <span className="header-span"></span>
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
                {/* <FilterSidebar /> */}
              </div>
            </div>

            <div className="content-column col-lg-12">
              <FilterJobBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(JobListing), { ssr: false });
