"use client";

import Link from "next/link";
import Image from "next/image";
import LoadingOverlay from "react-loading-overlay";
import axios from "@/helper/axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { BUCKET_DOMAIN } from "@/helper/Helper";

const FilterJobBox = () => {
  const [loading, setLoading] = useState(false);

  const [allJobs, setAllJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(1);
  const [sort, setSort] = useState(-1);
  const [search, setSearch] = useState("");

  const optionPerpage = [1, 10, 25, 50];

  useEffect(() => {
    getAllJobs();
  }, [currentPage, perPage, sort]);

  const getAllJobs = () => {
    setLoading(true);
    axios
      .get(
        `/job/jobs?page=${currentPage}&per_page=${perPage}&sort=${sort}&search=${search}`
      )
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { jobs, total } = res.data;
          setAllJobs(jobs);
          setTotal(total);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error("Something went wrong !!!");
      });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading...">
      <div className="ls-outer">
        <div className="ls-switcher">
          <div className="showing-result show-filters">
            <button
              type="button"
              className="theme-btn toggle-filters d-block mr-30"
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> Filter
            </button>

            <div className="text">
              Show <strong>{Math.min(perPage * currentPage, total)}</strong>{" "}
              jobs
            </div>
          </div>
          {/* End showing results */}
          <div className="sort-by">
            {/* {keyword !== "" ||
            location !== "" ||
            destination?.min !== 0 ||
            destination?.max !== 100 ||
            category !== "" ||
            jobType?.length !== 0 ||
            datePosted !== "" ||
            experience?.length !== 0 ||
            salary?.min !== 0 ||
            salary?.max !== 20000 ||
            tag !== "" ||
            sort !== "" ||
            perPage.start !== 0 ||
            perPage.end !== 0 ? (
              <button
                onClick={clearAll}
                className="btn btn-danger text-nowrap me-2"
                style={{ minHeight: "45px", marginBottom: "15px" }}
              >
                Clear All
              </button>
            ) : undefined} */}

            <select
              value={sort}
              className="chosen-single form-select"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value={-1}>Sort by (Newest)</option>
              <option value={1}>Sort by (Oldest)</option>
            </select>

            <select
              onChange={(e) => {
                setPerPage(e.target.value);
              }}
              className="chosen-single form-select ms-3 "
              value={perPage}
            >
              {optionPerpage.map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          {allJobs.map((item, key) => {
            return (
              <div
                className="job-block-four col-lg-4 col-md-6 col-sm-12"
                key={key}
              >
                <div className="inner-box">
                  <ul className="job-other-info">
                    {item?.jobType?.map((val, i) => (
                      <li key={i} className={`${val.styleClass}`}>
                        {val.type}
                      </li>
                    ))}
                  </ul>
                  <span className="company-logo">
                    <Image
                      width={90}
                      height={90}
                      src={BUCKET_DOMAIN + item.banner}
                      alt="featured job"
                    />
                  </span>
                  <span className="company-name">
                    {item.category?.category}
                  </span>
                  <h4>
                    <Link href={`/job-details/${item._id}`}>{item.title}</Link>
                  </h4>
                  <div className="location me-2">
                    <span className="icon flaticon-map-locator" />
                    {item.location || "London, UK"}
                  </div>
                  <div className="location">
                    <span className="icon flaticon-money" />${item.total_budget}
                  </div>

                  <ul className="post-tags">
                    {item?.jobTag?.map((val, i) => (
                      <li key={i}>
                        <a href="#">{val}</a>
                      </li>
                    ))}
                    <li className="colored">+{item.quentity}</li>
                  </ul>
                </div>
              </div>
            );
          })}

          {/* <div className="job-block-four col-lg-4 col-md-6 col-sm-12" key={item.id}>
        <div className="inner-box">
          <ul className="job-other-info">
            {item?.jobType?.map((val, i) => (
              <li key={i} className={`${val.styleClass}`}>
                {val.type}
              </li>
            ))}
          </ul>
          <span className="company-logo">
            <Image width={90} height={90} src={item.logo} alt="featured job" />
          </span>
          <span className="company-name">{item.company}</span>
          <h4>
            <Link href={`/job-single-v2/${item.id}`}>{item.jobTitle}</Link>
          </h4>
          <div className="location">
            <span className="icon flaticon-map-locator"></span>
            {item.location}
          </div>
          <ul className="post-tags">
            {item?.jobTag?.map((val, i) => (
              <li key={i}>
                <a href="#">{val}</a>
              </li>
            ))}
            <li className="colored">+2</li>
          </ul>
        </div>
      </div> */}
        </div>

        <div className="ls-show-more">
          <p>
            Showing {Math.min(perPage * currentPage, total)} of {total} Jobs
          </p>
          <div className="bar">
            <span
              className="bar-inner"
              style={{
                width: `${
                  (Math.min(perPage * currentPage, total) / total) * 100
                }%`,
              }}
            />
          </div>
          <button
            className="show-more"
            disabled={perPage * currentPage >= total ? true : false}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Show More
          </button>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default FilterJobBox;
