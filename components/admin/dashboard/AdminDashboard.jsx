"use client";

import dynamic from "next/dynamic";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import ProfileChart from "@/components/admin/dashboard/ProfileChart";
import Notification from "@/components/admin/dashboard/Notification";
import JobApplied from "@/components/admin/dashboard/JobApplied";
import { useEffect, useState } from "react";
import Loader from "@/helper/loader/Loader";
import axios from "@/helper/axios";
import adminConfig from "@/helper/adminConfig";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    getDashboadData();
  }, []);

  const getDashboadData = () => {
    setLoading(true);
    axios
      .get("/auth/admin-dashbooard", adminConfig())
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { dashboard } = res.data;
          setDashboardData(dashboard);
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
        <BreadCrumb title="Admin Panel!" />

        <div className="row">
          <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="ui-item ui-blue">
              <div className="left">
                <i className="icon la flaticon-briefcase" />
              </div>
              <div className="right">
                <h4>Jobs</h4>
                <p>{dashboardData.totalJobs}</p>
              </div>
            </div>
          </div>

          <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="ui-item ui-green">
              <div className="left">
                <i className="icon la la-bookmark-o" />
              </div>
              <div className="right">
                <h4>Users</h4>
                <p>{dashboardData.totalUsers}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-7 col-lg-12">
            <div className="graph-widget ls-widget">
              <ProfileChart />
            </div>
          </div>

          <div className="col-xl-5 col-lg-12">
            <div className="notification-widget ls-widget">
              <div className="widget-title">
                <h4>Notifications</h4>
              </div>
              <div className="widget-content">
                <Notification />
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="applicants-widget ls-widget">
              <div className="widget-title">
                <h4>Recent Applicants</h4>
              </div>
              <div className="widget-content">
                <div className="row">
                  <JobApplied />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(AdminDashboard), { ssr: false });
