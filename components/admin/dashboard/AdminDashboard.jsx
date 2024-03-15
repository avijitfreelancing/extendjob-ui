import dynamic from "next/dynamic";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import TopCardBlock from "@/components/admin/dashboard/TopCardBlock";
import ProfileChart from "@/components/admin/dashboard/ProfileChart";
import Notification from "@/components/admin/dashboard/Notification";
import JobApplied from "@/components/admin/dashboard/JobApplied";
import CopyrightFooter from "@/layout/CopyrightFooter";

const AdminDashboard = () => {
  return (
    <div>
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Admin Panel!" />

          <div className="row">
            <TopCardBlock />
          </div>
          {/* End .row top card block */}

          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/* <!-- Graph widget --> */}
              <div className="graph-widget ls-widget">
                <ProfileChart />
              </div>
              {/* End profile chart */}
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-12">
              {/* <!-- Notification Widget --> */}
              <div className="notification-widget ls-widget">
                <div className="widget-title">
                  <h4>Notifications</h4>
                </div>
                <div className="widget-content">
                  <Notification />
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-12">
              {/* <!-- applicants Widget --> */}
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <h4>Recent Applicants</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    {/* <!-- Candidate block three --> */}
                    <JobApplied />
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}
        </div>
        {/* End dashboard-outer */}
      </section>
      <CopyrightFooter />
    </div>
  );
};

export default dynamic(() => Promise.resolve(AdminDashboard), { ssr: false });
