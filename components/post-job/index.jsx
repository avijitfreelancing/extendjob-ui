import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import PostJobSteps from "./PostJobSteps";
import PostForm from "./PostForm"
import MenuToggler from "@/components/dashboard/MenuToggler";
import UserHeader from "@/components/header/UserHeader";
import MobileMenu from "@/components/header/MobileMenu";
import UserSidebar from "@/components/header/UserSidebar";
import CopyrightFooter from "@/layout/CopyrightFooter";

const Index = () => {
  return (
      <div className="page-wrapper dashboard">
        <span className="header-span"></span>
        {/* <!-- Dashboard --> */}
        <UserHeader />
        <MobileMenu />
        <UserSidebar />
        <section className="user-dashboard">
          <div className="dashboard-outer">
            <BreadCrumb title="Post a New Job!" />
            {/* breadCrumb */}

            <MenuToggler />
            {/* Collapsible sidebar button */}

            <div className="row">
              <div className="col-lg-12">
                {/* <!-- Ls widget --> */}
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Post Job</h4>
                    </div>

                    <div className="widget-content">
                      <PostJobSteps />
                      {/* End job steps form */}
                      <PostForm />
                      {/* End post box form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End dashboard-outer */}
        </section>
        {/* <!-- End Dashboard --> */}
        <CopyrightFooter />
        {/* <!-- End Copyright --> */}
      </div>
    // End page-wrapper
  );
};

export default Index;
