"use client";
import Link from "next/link";
import JobFeatured10 from "../job-featured/JobFeatured10";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "@/helper/axios";
import Loader from "@/helper/loader/Loader";
import Hero from "../hero/Hero";
import { BUCKET_DOMAIN } from "@/helper/Helper";
import moment from "moment";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  const [popularCategory, setPopularCategory] = useState([]);
  const [recentJobs, setRecentJobs] = useState([]);

  useEffect(() => {
    getAllJobCategory();
    getTop6Jobs();
  }, []);

  const getAllJobCategory = () => {
    setLoading(true);
    axios
      .get("/job/categories")
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { job_category } = res.data;
          setPopularCategory(job_category);
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

  const getTop6Jobs = () => {
    setLoading(true);
    axios
      .get(`/job/jobs?page=1&per_page=6&sort=-1&search=`)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { jobs } = res.data;
          setRecentJobs(jobs);
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

  const regBannerContent = [
    {
      id: 1,
      name: "Employers",
      text: ` Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt. Labore et dolore nostrud exercitation.`,
      avatar: "/images/resource/image-3.png",
      bannerClass: "banner-style-one",
      width: "300",
      height: "600",
      linkTitle: "Post a Job",
      link: "/post-job",
    },
    {
      id: 2,
      name: "Job Seekers",
      text: ` Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt. Labore et dolore nostrud exercitation.`,
      avatar: "/images/resource/banner-img-3.png",
      bannerClass: "banner-style-two",
      width: "350",
      height: "600",
      linkTitle: "Find a Job",
      link: "/jobs",
    },
  ];

  return (
    <>
      <Hero />
      {loading && <Loader />}

      <section className="registeration-banners">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            {regBannerContent.map((item) => (
              <div
                className={`${item.bannerClass} -type-2 col-lg-6 col-md-12 col-sm-12`}
                key={item.id}
              >
                <div className="inner-box">
                  <div className="inner-column" data-aos="fade-left">
                    <div className="sec-title">
                      <h2>
                        Get applications from the <br />
                        world best talents.
                      </h2>
                      <div className="text">
                        Search all the open positions on the web. Get your own
                        personalized salary estimate. Read reviews on over
                        600,000 companies worldwide.
                      </div>
                    </div>
                    <ul className="list-style-one">
                      <li>Bring to the table win-win survival</li>
                      <li>Capitalize on low hanging fruit to identify</li>
                      <li>But I must explain to you how all this</li>
                    </ul>
                    <Link href={item.link} className="theme-btn btn-style-one">
                      {item.linkTitle}
                    </Link>
                  </div>
                  <figure className="image">
                    <Image
                      width={item.width}
                      height={item.height}
                      src={item.avatar}
                      alt="resource"
                    />
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {popularCategory.map((item, key) => {
              return (
                <div
                  className="category-block col-lg-4 col-md-6 col-sm-12"
                  key={key}
                >
                  <div className="inner-box">
                    <div className="content">
                      <span className={`icon ${item.icon}`}></span>
                      <h4>
                        <Link href={`/jobs?query=${item.category}`}>
                          {item.category}
                        </Link>
                      </h4>
                      {/* <p>({item.jobNumber} open positions)</p> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center mb-0">
            <h2>Jobs of the day</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>

          <div className="default-tabs pt-50 tabs-box">
            <div className="tab-buttons-wrap">
              <ul className="tab-buttons -pills-condensed">
                <li className="tab-btn active-btn">Recent</li>
              </ul>
            </div>

            <div className="row pt-50" data-aos="fade-up">
              {recentJobs.map((item, key) => {
                const formattedDate = moment(item.createdAt).isSame(
                  moment(),
                  "day"
                )
                  ? moment(item.createdAt).fromNow()
                  : moment(item.createdAt).format("MMMM Do YYYY");
                return (
                  <div
                    className="job-block col-lg-6 col-md-12 col-sm-12"
                    key={key}
                  >
                    <div className="inner-box">
                      <div className="content">
                        <span className="company-logo">
                          <Image
                            width={50}
                            height={49}
                            src={BUCKET_DOMAIN + item.banner}
                            alt="item brand"
                          />
                        </span>
                        <h4>
                          <Link href={`/job-details/${item._id}`}>
                            {item.title}
                          </Link>
                        </h4>
                        <ul className="job-info">
                          <li>
                            <span className="icon flaticon-map-locator" />
                            {item.userDetails?.country_code}
                          </li>
                          <li>
                            <span className="icon flaticon-clock-3" />
                            {formattedDate}
                          </li>
                          <li>
                            <span className="icon flaticon-money" />
                            {item.total_budget}
                          </li>
                        </ul>

                        <button className="bookmark-btn">
                          <span className="flaticon-bookmark" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
