"use client";

import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import TopCardBlock from "@/components/dashboard/TopCardBlock";
import ProfileChart from "@/components/dashboard/ProfileChart";
import Notification from "@/components/dashboard/Notification";
import JobApplied from "@/components/dashboard/JobApplied";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const UserDashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    setUserData({ ...userDetails });
  }, []);

  return (
    <div>
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title={`Hello, ${userData.username || "User"}!!`} />

          <div className="row">
            <TopCardBlock />
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
                  <h4>Jobs Applied Recently</h4>
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
    </div>
  );
};

export default dynamic(() => Promise.resolve(UserDashboard), { ssr: false });
