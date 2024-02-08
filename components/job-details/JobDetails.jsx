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
import { useEffect, useState } from "react";
import { BUCKET_DOMAIN, DATE_TIME_HELPER } from "@/helper/Helper";
import moment from "moment/moment";
import config from "@/helper/config";

export default function JobDetails({ params }) {
  const [loading, setLoading] = useState(false);

  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    // getMyJobs();
    console.log("params", params);
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
            <BreadCrumb title="Job Details" />

            <MenuToggler />

            <div className="row">
              <div className="col-lg-12">
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Job Details</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CopyrightFooter />
      </div>
    </LoadingOverlay>
  );
}
