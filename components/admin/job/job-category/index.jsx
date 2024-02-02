import JobCategoryTable from "./JobCategoryTable";
import MenuToggler from "../MenuToggler";
import AdminWrapper from "@/layout/AdminWrapper";

const index = () => {
  return (
      <AdminWrapper>
        <div>
          <span className="header-span" />

          <section className="user-dashboard">
            <div className="dashboard-outer">
              <MenuToggler />

              <div className="row">
                <div className="col-lg-12">
                  <div className="ls-widget">
                    <JobCategoryTable />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AdminWrapper>
  );
};

export default index;
