"use client";
import candidatesData from "@/data/candidates";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/helper/loader/Loader";
import adminConfig from "@/helper/adminConfig";
import axios from "@/helper/axios";
import { toast } from "react-toastify";
import { BUCKET_DOMAIN } from "@/helper/Helper";

export default function Candidate() {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    setLoading(true);

    axios
      .get(`/auth/users-list`, adminConfig())
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { profiles } = res.data;
          setProfiles(profiles);
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
                  <h4>Applicant</h4>
                  <div className="chosen-outer">
                    <select className="chosen-single form-select chosen-container">
                      <option>Select Jobs</option>
                      <option>Last 12 Months</option>
                      <option>Last 16 Months</option>
                      <option>Last 24 Months</option>
                      <option>Last 5 year</option>
                    </select>

                    <select className="chosen-single form-select chosen-container">
                      <option>All Status</option>
                      <option>Last 12 Months</option>
                      <option>Last 16 Months</option>
                      <option>Last 24 Months</option>
                      <option>Last 5 year</option>
                    </select>
                  </div>
                </div>

                <div className="widget-content">
                  <div className="tabs-box">
                    <div className="tabs-content">
                      <div className="row">
                        {profiles.map((item, key) => {
                          return (
                            <div
                              className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                              key={key}
                            >
                              <div className="inner-box">
                                <div className="content">
                                  <figure className="image">
                                    <Image
                                      width={90}
                                      height={90}
                                      src={
                                        item.avatar
                                          ? BUCKET_DOMAIN + item.avatar
                                          : "/images/resource/candidate-1.png"
                                      }
                                      alt="candidates"
                                    />
                                  </figure>
                                  <h4 className="name">
                                    <Link href={`/admin/candidate/${item._id}`}>
                                      {item.name || item.username}
                                    </Link>
                                  </h4>

                                  <ul className="candidate-info">
                                    <li className="designation">
                                      {item.job_title}
                                    </li>
                                    <li>
                                      <span className="icon flaticon-map-locator" />{" "}
                                      {item.country_code}
                                    </li>
                                    {/* <li>
                                      <span className="icon flaticon-money"></span>{" "}
                                      ${candidate.hourlyRate} / hour
                                    </li> */}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}

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
                                  <Link
                                    href={`/candidates-single-v1/${candidate.id}`}
                                  >
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
                                    <span className="icon flaticon-money"></span>{" "}
                                    ${candidate.hourlyRate} / hour
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
                    </div>
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
