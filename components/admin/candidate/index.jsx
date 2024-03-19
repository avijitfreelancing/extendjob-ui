"use client";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import MenuToggler from "@/components/admin/MenuToggler";
import candidatesData from "@/data/candidates";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
      <section className="user-dashboard">
          <div className="dashboard-outer">
              <BreadCrumb title="All Candidate!" />
              {/* breadCrumb */}

              <MenuToggler />
              {/* Collapsible sidebar button */}

              <div className="row">
                  <div className="col-lg-12">
                      {/* <!-- Ls widget --> */}
                      <div className="ls-widget">
                          <div className="tabs-box">
                              <div className="widget-title">
                                  <h4>Applicant</h4>
                                  <div className="chosen-outer">
                                      <select className="chosen-single form-select chosen-container">
                                          <option>Select Jobs</option>
                                          <option>Last 12 Months</option>
                                          <option>Last 16 Months</option>
                                          <option>Last 24 Months</option>
                                          <option>Last 5 year</option>
                                      </select>
                                      {/* <!--Tabs Box--> */}

                                      <select className="chosen-single form-select chosen-container">
                                          <option>All Status</option>
                                          <option>Last 12 Months</option>
                                          <option>Last 16 Months</option>
                                          <option>Last 24 Months</option>
                                          <option>Last 5 year</option>
                                      </select>
                                      {/* <!--Tabs Box--> */}
                                  </div>
                              </div>
                              {/* End top widget filter bar */}

                              <div className="widget-content">
                                  <div className="tabs-box">
                                      <Tabs>
                                          <div className="aplicants-upper-bar">
                                              <h6>Senior Product Designer</h6>

                                              <TabList className="aplicantion-status tab-buttons clearfix">
                                                  <Tab className="tab-btn totals"> Total(s): 6</Tab>
                                                  <Tab className="tab-btn approved"> Approved: 2</Tab>
                                                  <Tab className="tab-btn rejected"> Rejected(s): 4</Tab>
                                              </TabList>
                                          </div>

                                          <div className="tabs-content">
                                              <TabPanel>
                                                  <div className="row">
                                                      {candidatesData.slice(17, 23).map((candidate) => (
                                                          <div
                                                              className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                                                              key={candidate.id}
                                                          >
                                                              <div className="inner-box">
                                                                  <div className="content">
                                                                      <figure className="image">
                                                                          <Image
                                                                              width={90}
                                                                              height={90}
                                                                              src={candidate.avatar}
                                                                              alt="candidates"
                                                                          />
                                                                      </figure>
                                                                      <h4 className="name">
                                                                          <Link href={`/candidates-single-v1/${candidate.id}`}>
                                                                              {candidate.name}
                                                                          </Link>
                                                                      </h4>

                                                                      <ul className="candidate-info">
                                                                          <li className="designation">
                                                                              {candidate.designation}
                                                                          </li>
                                                                          <li>
                                                                              <span className="icon flaticon-map-locator"></span>{" "}
                                                                              {candidate.location}
                                                                          </li>
                                                                          <li>
                                                                              <span className="icon flaticon-money"></span> $
                                                                              {candidate.hourlyRate} / hour
                                                                          </li>
                                                                      </ul>
                                                                      {/* End candidate-info */}

                                                                      <ul className="post-tags">
                                                                          {candidate.tags.map((val, i) => (
                                                                              <li key={i}>
                                                                                  <a href="#">{val}</a>
                                                                              </li>
                                                                          ))}
                                                                      </ul>
                                                                  </div>
                                                                  {/* End content */}

                                                                  <div className="option-box">
                                                                      <ul className="option-list">
                                                                          <li>
                                                                              <button data-text="View Aplication">
                                                                                  <span className="la la-eye"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Approve Aplication">
                                                                                  <span className="la la-check"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Reject Aplication">
                                                                                  <span className="la la-times-circle"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Delete Aplication">
                                                                                  <span className="la la-trash"></span>
                                                                              </button>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                                  {/* End admin options box */}
                                                              </div>
                                                          </div>
                                                      ))}
                                                  </div>
                                              </TabPanel>
                                              {/* End total applicants */}

                                              <TabPanel>
                                                  <div className="row">
                                                      {candidatesData.slice(17, 19).map((candidate) => (
                                                          <div
                                                              className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                                                              key={candidate.id}
                                                          >
                                                              <div className="inner-box">
                                                                  <div className="content">
                                                                      <figure className="image">
                                                                          <Image
                                                                              width={90}
                                                                              height={90}
                                                                              src={candidate.avatar}
                                                                              alt="candidates"
                                                                          />
                                                                      </figure>
                                                                      <h4 className="name">
                                                                          <Link href={`/candidates-single-v1/${candidate.id}`}>
                                                                              {candidate.name}
                                                                          </Link>
                                                                      </h4>

                                                                      <ul className="candidate-info">
                                                                          <li className="designation">
                                                                              {candidate.designation}
                                                                          </li>
                                                                          <li>
                                                                              <span className="icon flaticon-map-locator"></span>{" "}
                                                                              {candidate.location}
                                                                          </li>
                                                                          <li>
                                                                              <span className="icon flaticon-money"></span> $
                                                                              {candidate.hourlyRate} / hour
                                                                          </li>
                                                                      </ul>
                                                                      {/* End candidate-info */}

                                                                      <ul className="post-tags">
                                                                          {candidate.tags.map((val, i) => (
                                                                              <li key={i}>
                                                                                  <a href="#">{val}</a>
                                                                              </li>
                                                                          ))}
                                                                      </ul>
                                                                  </div>
                                                                  {/* End content */}

                                                                  <div className="option-box">
                                                                      <ul className="option-list">
                                                                          <li>
                                                                              <button data-text="View Aplication">
                                                                                  <span className="la la-eye"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Approve Aplication">
                                                                                  <span className="la la-check"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Reject Aplication">
                                                                                  <span className="la la-times-circle"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Delete Aplication">
                                                                                  <span className="la la-trash"></span>
                                                                              </button>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                                  {/* End admin options box */}
                                                              </div>
                                                          </div>
                                                      ))}
                                                  </div>
                                              </TabPanel>
                                              {/* End approved applicants */}

                                              <TabPanel>
                                                  <div className="row">
                                                      {candidatesData.slice(17, 21).map((candidate) => (
                                                          <div
                                                              className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                                                              key={candidate.id}
                                                          >
                                                              <div className="inner-box">
                                                                  <div className="content">
                                                                      <figure className="image">
                                                                          <Image
                                                                              width={90}
                                                                              height={90}
                                                                              src={candidate.avatar}
                                                                              alt="candidates"
                                                                          />
                                                                      </figure>
                                                                      <h4 className="name">
                                                                          <Link href={`/candidates-single-v1/${candidate.id}`}>
                                                                              {candidate.name}
                                                                          </Link>
                                                                      </h4>

                                                                      <ul className="candidate-info">
                                                                          <li className="designation">
                                                                              {candidate.designation}
                                                                          </li>
                                                                          <li>
                                                                              <span className="icon flaticon-map-locator"></span>{" "}
                                                                              {candidate.location}
                                                                          </li>
                                                                          <li>
                                                                              <span className="icon flaticon-money"></span> $
                                                                              {candidate.hourlyRate} / hour
                                                                          </li>
                                                                      </ul>
                                                                      {/* End candidate-info */}

                                                                      <ul className="post-tags">
                                                                          {candidate.tags.map((val, i) => (
                                                                              <li key={i}>
                                                                                  <a href="#">{val}</a>
                                                                              </li>
                                                                          ))}
                                                                      </ul>
                                                                  </div>
                                                                  {/* End content */}

                                                                  <div className="option-box">
                                                                      <ul className="option-list">
                                                                          <li>
                                                                              <button data-text="View Aplication">
                                                                                  <span className="la la-eye"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Approve Aplication">
                                                                                  <span className="la la-check"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Reject Aplication">
                                                                                  <span className="la la-times-circle"></span>
                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                              <button data-text="Delete Aplication">
                                                                                  <span className="la la-trash"></span>
                                                                              </button>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                                  {/* End admin options box */}
                                                              </div>
                                                          </div>
                                                      ))}
                                                  </div>
                                              </TabPanel>
                                              {/* End rejected applicants */}
                                          </div>
                                      </Tabs>
                                  </div>
                              </div>
                              {/* End widget-content */}
                          </div>
                      </div>
                  </div>
              </div>
              {/* End .row */}
          </div>
          {/* End dashboard-outer */}
      </section>
  );
};

export default index;
