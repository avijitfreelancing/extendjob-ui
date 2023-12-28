'use client'

import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="Job title, keywords, or company"
          />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
        <span className="icon flaticon-briefcase"></span>
        <select className="chosen-single form-select">
          <option defaultValue="">All Categories</option>
          <option defaultValue="44">Accounting / Finance</option>
          <option defaultValue="106">Automotive Jobs</option>
          <option defaultValue="46">Customer</option>
          <option defaultValue="48">Design</option>
          <option defaultValue="47">Development</option>
          <option defaultValue="45">Health and Care</option>
          <option defaultValue="105">Marketing</option>
          <option value="107">Project Management</option>
        </select>
      </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => router.push("/job-list-v1")}
          >
            <span className="btn-title">Find Jobs</span>
          </button>
        </div>
      </div>
      {/* End .row */}
    </form>
  );
};

export default SearchForm;
