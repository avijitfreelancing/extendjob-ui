"use client";
import { useRouter } from "next/navigation";
import PopularSearch from "@/components/hero/PopularSearch";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      className="banner-section-three -type-17"
      style={{ backgroundImage: "url(/images/index-17/header/bg.png)" }}
    >
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="title-box"
                data-wow-delay="500"
                data-aos="fade-up"
              >
                <h3>
                  Join us & Explore
                  <br /> Thousands of Jobs
                </h3>
                <div className="text">
                  Find Jobs, Employment & Career Opportunities
                </div>
              </div>

              <div
                className="job-search-form"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <form onClick={handleSubmit}>
                  <div className="row justify-content-center justify-content-md-between">
                    <div className="form-group col-lg-9">
                      <span className="icon flaticon-search-1" />
                      <input
                        type="text"
                        name="field_name"
                        placeholder="Job title, keywords, or company"
                        onChange={(e) => {
                          setQuery(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-auto">
                      <button
                        type="submit"
                        className="theme-btn btn-style-two"
                        onClick={() => router.push(`/jobs?query=${query}`)}
                      >
                        Find Jobs
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <PopularSearch />
            </div>
          </div>

          <div className="image-column col-lg-5 col-md-12">
            <div className="image-box">
              <figure
                className="main-image"
                data-aos="fade-left"
                data-aos-delay="1500"
              >
                <Image
                  width={572}
                  height={560}
                  src="/images/index-17/header/1.png"
                  alt="heor image"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
