"use client";

import dynamic from "next/dynamic";
import BreadCrumb from "../bread-crumb/BreadCrumb";
import PostJobSteps from "./PostJobSteps";
import PostForm from "./PostForm";

const JobPost = () => {
  return (
    <div>
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Post a New Job!" />

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Post Job</h4>
                  </div>

                  <div className="widget-content">
                    <PostJobSteps />
                    <PostForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default dynamic(() => Promise.resolve(JobPost), { ssr: false });
