"use client";

import Link from "next/link";
import Image from "next/image.js";
import { useEffect, useState } from "react";
import Loader from "@/helper/loader/Loader";
import axios from "@/helper/axios";
import { toast } from "react-toastify";
import adminConfig from "@/helper/adminConfig";
import { BUCKET_DOMAIN, DATE_TIME_HELPER, JOB_STATUS } from "@/helper/Helper";
import moment from "moment";

export default function AllJobsForAdmin() {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(1);
  const [sort, setSort] = useState(-1);
  const [search, setSearch] = useState("");

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    setLoading(true);
    axios
      .get(
        `/job/all-jobs?page=${currentPage}&per_page=${perPage}&sort=${sort}&search=${search}`,
        adminConfig()
      )
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { jobs, total } = res.data;
          setJobs(jobs);
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
    <section className="user-dashboard">
      {loading && <Loader />}

      <div className="dashboard-outer">
        <div className="row">
          <div className="col-lg-12">
            <div className="ls-widget">
              <div className="tabs-box">
                <div className="widget-title">
                  <h4>All Job Listings</h4>

                  <div className="chosen-outer">
                    <select className="chosen-single form-select">
                      <option>Last 6 Months</option>
                      <option>Last 12 Months</option>
                      <option>Last 16 Months</option>
                      <option>Last 24 Months</option>
                      <option>Last 5 year</option>
                    </select>
                  </div>
                </div>

                <div className="widget-content">
                  <div className="table-outer">
                    <table className="default-table manage-job-table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Applications</th>
                          <th>Created & Expired</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {jobs.map((item, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                <div className="job-block">
                                  <div className="inner-box">
                                    <div className="content">
                                      <span className="company-logo">
                                        <Image
                                          width={50}
                                          height={49}
                                          src={BUCKET_DOMAIN + item.banner}
                                          alt="logo"
                                        />
                                      </span>
                                      <h4>
                                        <Link href={`/job-details/${item._id}`}>
                                          {item.title +
                                            ", " +
                                            item.category?.category}
                                        </Link>
                                      </h4>
                                      <ul className="job-info">
                                        <li>
                                          <span className="icon flaticon-briefcase"></span>
                                          Segment
                                        </li>
                                        <li>
                                          <span className="icon flaticon-map-locator"></span>
                                          London, UK
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="applied">
                                <a href="#">3+ Applied</a>
                              </td>
                              <td>
                                {moment(jobs.createdAt).format(
                                  DATE_TIME_HELPER.JOB_DATE_FORMAT
                                )}
                              </td>
                              <td className="status">
                                {JOB_STATUS[item.status]}
                              </td>
                              <td>
                                <div className="option-box">
                                  <ul className="option-list">
                                    <li>
                                      <button data-text="View Aplication">
                                        <span className="la la-eye"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button data-text="Reject Aplication">
                                        <span className="la la-pencil"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button data-text="Delete Aplication">
                                        <span className="la la-trash"></span>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
