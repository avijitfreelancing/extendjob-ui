"use client";
import jobs from "@/data/job-featured";
import Link from "next/link";
import Image from "next/image.js";
import axios from "@/helper/axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { BUCKET_DOMAIN, DATE_TIME_HELPER } from "@/helper/Helper";
import moment from "moment/moment";
import config from "@/helper/config";
import Loader from "@/helper/loader/Loader";

export default function JobDetails({ params }) {
  const [loading, setLoading] = useState(false);

  const DATE_FORMAT = "DD-MM-YYYY";
  const TIME_FORMAT = "h:m:s A";
  const DATE_TIME_FORMAT = "Do MMM, YYYY - h:m:s A";
  const OLDER_FORMAT = "ddd, Do MMM YYYY - h:m:s A";
  const DAY_FORMAT = "dddd";
  const REFERENCE = moment();
  const TODAY = REFERENCE.clone().startOf("day");
  const YESTERDAY = REFERENCE.clone().subtract(1, "days").startOf("day");
  const A_WEEK_OLD = REFERENCE.clone().subtract(7, "days").startOf("day");

  const [jobDetailsData, setJobDetailsData] = useState({});
  const [userDetails, setUserDetails] = useState({});

  const id = params.id;

  useEffect(() => {
    let data = localStorage.getItem("userDetails");
    setUserDetails(data ? JSON.parse(data) : {});
    getJobDetails();
  }, [id]);

  const getJobDetails = () => {
    setLoading(true);
    axios
      .get(`/job/job/${id}`, config())
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { job } = res.data;

          let date = moment(job.createdAt, DATE_FORMAT);
          let today = isToday(date);
          let yesterday = isYesterday(date);
          let week = isWithinAWeek(date);

          let timeStamp;
          if (today) {
            timeStamp = moment(job.createdAt).fromNow();
          } else if (yesterday) {
            timeStamp = moment(job.createdAt).format(TIME_FORMAT);
          } else if (!week) {
            timeStamp = moment(job.createdAt).format(OLDER_FORMAT);
          } else {
            timeStamp = moment(job.createdAt).format(DATE_TIME_FORMAT);
          }

          job.timeStamp = timeStamp;

          setJobDetailsData(job);
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

  const isToday = (momentDate) => momentDate.isSame(TODAY, "d");
  const isYesterday = (momentDate) => momentDate.isSame(YESTERDAY, "d");
  const isWithinAWeek = (momentDate) => momentDate.isAfter(A_WEEK_OLD);
  const getDay = (momentDate) => momentDate.format(DAY_FORMAT);

  const company = jobs.find((item) => item.id == 1) || jobs[0];
  const mt_90 = {
    marginTop: '90px' // Adjust '90px' according to your desired margin value
  };

  return (
    <section className="job-detail-section" style={mt_90}>
      {loading && <Loader />}
      <div className="upper-box">
        <div className="auto-container">
          <div className="job-block-seven">
            <div className="inner-box">
              <div className="content">
                <span className="company-logo">
                  <Image
                    width={100}
                    height={98}
                    src={BUCKET_DOMAIN + jobDetailsData.banner}
                    alt="logo"
                  />
                </span>
                <h4>{jobDetailsData.title}</h4>

                <ul className="job-info">
                  <li>
                    <span className="icon flaticon-briefcase"></span>
                    {company?.company}
                  </li>

                  <li>
                    <span className="icon flaticon-map-locator"></span>
                    {company?.location}
                  </li>

                  <li>
                    <span className="icon flaticon-clock-3"></span>{" "}
                    {company?.time}
                  </li>

                  <li>
                    <span className="icon flaticon-money"></span> $
                    {jobDetailsData.total_budget}
                  </li>
                </ul>

                <ul className="job-other-info">
                  {company?.jobType?.map((val, i) => (
                    <li key={i} className={`${val.styleClass}`}>
                      {val.type}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="btn-box">
                {userDetails._id !== jobDetailsData.user_id && (
                  <>
                    {localStorage.getItem("token") ? (
                      <>
                        <button
                          className="theme-btn btn-style-one"
                          data-bs-toggle="modal"
                          data-bs-target="#applyJobModal"
                        >
                          Apply For Job
                        </button>
                        <button className="bookmark-btn">
                          <i className="flaticon-bookmark" />
                        </button>
                      </>
                    ) : (
                      <Link className="theme-btn btn-style-one" href="/login">
                        Login to apply
                      </Link>
                    )}
                  </>
                )}
              </div>

              <div
                className="modal fade"
                id="applyJobModal"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="apply-modal-content modal-content">
                    <div className="text-center">
                      <h3 className="title">Apply for this job</h3>
                      <button
                        type="button"
                        className="closed-modal"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    {/* End modal-header */}

                    <form className="default-form job-apply-form">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            className="darma"
                            name="message"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <div className="input-group checkboxes square">
                            <input
                              type="checkbox"
                              name="remember-me"
                              id="rememberMe"
                            />
                            <label htmlFor="rememberMe" className="remember">
                              <span className="custom-checkbox"></span> You
                              accept our{" "}
                              <span data-bs-dismiss="modal">
                                <Link href="/terms">
                                  Terms and Conditions and Privacy Policy
                                </Link>
                              </span>
                            </label>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <button
                            className="theme-btn btn-style-one w-100"
                            type="submit"
                            name="submit-form"
                          >
                            Apply Job
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="job-detail-outer">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="job-detail">
                <h4>Job Description</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: jobDetailsData.description,
                  }}
                />
                {/* <h4>Key Responsibilities</h4>
                  <ul className="list-style-three">
                    <li>
                      Be involved in every step of the product design cycle from
                      discovery to developer handoff and user acceptance
                      testing.
                    </li>
                    <li>
                      Work with BAs, product managers and tech teams to lead the
                      Product Design
                    </li>
                    <li>
                      Maintain quality of the design process and ensure that
                      when designs are translated into code they accurately
                      reflect the design specifications.
                    </li>
                    <li>
                      Accurately estimate design tickets during planning
                      sessions.
                    </li>
                    <li>
                      Contribute to sketching sessions involving
                      non-designersCreate, iterate and maintain UI deliverables
                      including sketch files, style guides, high fidelity
                      prototypes, micro interaction specifications and pattern
                      libraries.
                    </li>
                    <li>
                      Ensure design choices are data led by identifying
                      assumptions to test each sprint, and work with the
                      analysts in your team to plan moderated usability test
                      sessions.
                    </li>
                    <li>
                      Design pixel perfect responsive UI’s and understand that
                      adopting common interface patterns is better for UX than
                      reinventing the wheel
                    </li>
                    <li>
                      Present your work to the wider business at Show & Tell
                      sessions.
                    </li>
                  </ul>
                  <h4>Skill & Experience</h4>
                  <ul className="list-style-three">
                    <li>
                      You have at least 3 years’ experience working as a Product
                      Designer.
                    </li>
                    <li>
                      You have experience using Sketch and InVision or Framer X
                    </li>
                    <li>
                      You have some previous experience working in an agile
                      environment – Think two-week sprints.
                    </li>
                    <li>
                      You are familiar using Jira and Confluence in your
                      workflow
                    </li>
                  </ul> */}
              </div>

              {/* <div className="other-options">
                  <div className="social-share">
                    <h5>Share this job</h5>
                    
                  </div>
                </div> */}

              <div className="related-jobs">
                <div className="title-box">
                  <h3>Related Jobs</h3>
                  <div className="text">2020 jobs live - 293 added today.</div>
                </div>

                {/*<RelatedJobs />*/}
              </div>
            </div>

            <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar">
                <div className="sidebar-widget">
                  <h4 className="widget-title">Job Overview</h4>
                  <div className="widget-content">
                    <ul className="job-overview">
                      <li>
                        <i className="icon icon-calendar"></i>
                        <h5>Date Posted:</h5>
                        <span>{jobDetailsData.timeStamp}</span>
                      </li>
                      {/* <li>
                          <i className="icon icon-expiry"></i>
                          <h5>Expiration date:</h5>
                          <span>April 06, 2021</span>
                        </li> */}
                      {/* <li>
                          <i className="icon icon-location"></i>
                          <h5>Location:</h5>
                          <span>London, UK</span>
                        </li> */}
                      <li>
                        <i className="icon icon-user-2" />
                        <h5>Job Title:</h5>
                        <span>{jobDetailsData.category?.category}</span>
                      </li>
                      {/* <li>
                          <i className="icon icon-clock"></i>
                          <h5>Hours:</h5>
                          <span>50h / week</span>
                        </li> */}
                      <li>
                        <i className="icon icon-rate"></i>
                        <h5>Rate:</h5>
                        <span>${jobDetailsData.worker_price}</span>
                      </li>
                      <li>
                        <i className="icon icon-salary"></i>
                        <h5>Salary:</h5>
                        <span>${jobDetailsData.total_budget}</span>
                      </li>
                    </ul>
                  </div>

                  <h4 className="widget-title mt-5">Job Location</h4>
                  <div className="widget-content">
                    <div className="map-outer">
                      <div style={{ height: "300px", width: "100%" }}>
                        {/*<MapJobFinder />*/}
                      </div>
                    </div>
                  </div>

                  <h4 className="widget-title">Job Skills</h4>
                  <div className="widget-content">{/*<JobSkills />*/}</div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
