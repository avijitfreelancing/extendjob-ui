"use client";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import MenuToggler from "@/components/dashboard/MenuToggler";
import UserHeader from "@/components/header/UserHeader";
import MobileMenu from "@/components/header/MobileMenu";
import UserSidebar from "@/components/header/UserSidebar";
import CopyrightFooter from "@/layout/CopyrightFooter";
import Link from "next/link";
import Image from "next/image.js";
import axios from "@/helper/axios";
import LoadingOverlay from "react-loading-overlay";
import { toast } from "react-toastify";
import config from "@/helper/config";
import { useEffect, useState } from "react";
import { BUCKET_DOMAIN, DATE_TIME_HELPER } from "@/helper/Helper";
import moment from "moment/moment";

const Index = () => {
  const [loading, setLoading] = useState(false);

  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    getMyJobs();
  }, []);

  const getMyJobs = () => {
    setLoading(true);
    axios
      .get(`/job/my-jobs`, config)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { jobs } = res.data;
          setMyJobs(jobs);
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

  const activeInactiveJob = (id) => {
    setLoading(true);

    axios
      .put("/job/active-inactive-job", { id }, config)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          toast.success(res.data.message);
          getMyJobs();
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
      <div className="page-wrapper dashboard">
        <span className="header-span" />

        <UserHeader />
        <MobileMenu />
        <UserSidebar />

        <section className="user-dashboard">
          <div className="dashboard-outer">
            <BreadCrumb title="Job History !" />

            <MenuToggler />

            <div className="row">
              <div className="col-lg-12">
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Job History</h4>

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
                        <div className="table-outer">
                          <table className="default-table manage-job-table">
                            <thead>
                              <tr>
                                <th>Job Title</th>
                                <th>Date Post</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              {myJobs.map((jobs, key) => {
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
                                                src={
                                                  BUCKET_DOMAIN + jobs.banner
                                                }
                                                alt="logo"
                                              />
                                            </span>
                                            <h4>
                                              <Link
                                                href={`/job-details/${jobs._id}`}
                                              >
                                                {jobs.title +
                                                  ", " +
                                                  jobs.category.category}
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
                                    <td>
                                      {moment(jobs.createdAt).format(
                                        DATE_TIME_HELPER.JOB_DATE_FORMAT
                                      )}
                                    </td>
                                    <td
                                      className="status"
                                      onClick={() => {
                                        activeInactiveJob(jobs._id);
                                      }}
                                    >
                                      {jobs.active ? "Active" : "Inactive"}
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
                    {/* End table widget content */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End dashboard-outer */}
        </section>
        <CopyrightFooter />
        {/* <!-- End Copyright --> */}
      </div>
    </LoadingOverlay>
  );
};

export default Index;
