import Link from "next/link.js";
import jobs from "@/data/job-featured.js";
import Image from "next/image.js";
import CreateModal from "@/components/admin/job/createModal";
import EditModal from "@/components/admin/job/EditModal";

const JobAlertsTable = () => {
  return (
    <div className="tabs-box">
      <CreateModal/>
      <EditModal/>
      <div className="widget-title">
        <h4>Job Category</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <div className="btn-box">
            <a
                href="#"
                className="theme-btn btn-style-three call-modal"
                data-bs-toggle="modal"
                data-bs-target="#createPopupModal"
            >
              ADD <span className="la la-plus"></span>
            </a>
          </div>
          {/*<button data-text="Add Job Category">*/}
          {/*  ADD <span className="la la-plus"></span>*/}
          {/*</button>*/}
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Criteria</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {jobs.slice(4, 8).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <Image
                                width={50}
                                height={49}
                                src={item.logo}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.jobTitle}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                Segment
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                London, UK
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Human Resources, Junior</td>
                    <td>Nov 12, 2021 </td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-bs-toggle="modal"
                                    data-bs-target="#editPopupModal"
                                    data-text="Edit Job Category">
                              <span className="la la-edit"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Job Category">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobAlertsTable;
