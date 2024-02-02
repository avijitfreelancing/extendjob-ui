import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import TopCardBlock from "@/components/admin/dashboard/TopCardBlock";
import ProfileChart from "@/components/admin/dashboard/ProfileChart";
import Notification from "@/components/admin/dashboard/Notification";
import JobApplied from "@/components/admin/dashboard/JobApplied";
import MenuToggler from "@/components/admin/dashboard/MenuToggler";
import MobileMenu from "@/components/header/MobileMenu";
import DashboardHeader from "@/components/header/DashboardHeader";
import CopyrightFooter from "@/layout/CopyrightFooter";
import AdminSidebar from "@/components/header/AdminSidebar";

const Index = () => {
    return (
        <div className="page-wrapper dashboard">
            {/*<div >*/}
            <span className="header-span"></span>
            {/* <!-- Header Span for hight --> */}
            <DashboardHeader />
            {/* End Header */}
            <MobileMenu />
            {/* End MobileMenu */}
            <AdminSidebar />
            {/* <!-- End Candidates Sidebar Menu --> */}
            {/* <!-- Dashboard --> */}
            <section className="user-dashboard">
                <div className="dashboard-outer">
                    <BreadCrumb title="Dashboard Home!" />
                    {/* breadCrumb */}

                    <MenuToggler />
                    {/* Collapsible sidebar button */}

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
            {/* <!-- End Copyright --> */}
        </div>
    );
};

export default Index;