"use client";
import Link from "next/link.js";
import jobs from "@/data/job-featured.js";
import Image from "next/image.js";
import EditModal from "@/components/admin/job/EditModal";
import axios from "@/helper/axios";
import { useState } from "react";
import validation from "@/helper/validation";
import _ from "lodash";
import { toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";
import config from "@/helper/config";

const JobAlertsTable = () => {
  const [userData, setUserData] = useState({
    category: "",
    sub_category: [],
    sub_cat_text: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });

    const valid_obj = {
      value,
      rules: e.target.getAttribute("validaterule"),
      message: e.target.getAttribute("validatemsg"),
    };

    validation(valid_obj).then((err) => {
      setErrors({ ...errors, [name]: err });
    });
  };

  const addSubCategory = () => {
    let { sub_category, sub_cat_text } = userData;
    if (errors.sub_cat_text || !sub_cat_text) {
      return;
    }

    let text = sub_cat_text.toLowerCase();
    if (
      _.find(sub_category, (sub) => {
        return sub.toLowerCase() == text;
      })
    ) {
      toast.error("Sub category already present");
      return;
    }

    sub_category.push(sub_cat_text);
    userData.sub_cat_text = "";
    userData.sub_category = [...sub_category];
    setUserData({ ...userData });
  };

  const delteSubcat = (index) => {
    let { sub_category } = userData;
    sub_category.splice(index, 1);
    userData.sub_category = [...sub_category];
    setUserData({ ...userData });
  };

  const clearUserData = () => {
    setUserData({
      category: "",
      sub_category: [],
      sub_cat_text: "",
    });
    setErrors({});
  };

  const isValidForm = (errors) => {
    let isValid = true;
    for (const [, value] of Object.entries(errors)) {
      if (value.length > 0) {
        isValid = false;
      }
    }
    return isValid;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (isValidForm(errors)) {
      let { sub_category, sub_cat_text } = userData;
      if (sub_cat_text) {
        sub_category.push(sub_cat_text);
        userData.sub_cat_text = "";
        userData.sub_category = [...sub_category];
        setUserData({ ...userData });
      }

      setLoading(true);
      axios
        .post("/job/add-category", userData, config)
        .then((res) => {
          setLoading(false);
          if (res.data.success) {
            toast.success(res.data.message);
            clearUserData();
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          toast.error("Something went wrong !!!");
        });
    }
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading...">
      <div className="tabs-box">
        <div className="modal fade" id="createPopupModal">
          <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
            <div className="modal-content">
              <button
                type="button"
                className="closed-modal"
                data-bs-dismiss="modal"
                onClick={clearUserData}
              />

              <div className="modal-body">
                <div id="login-modal">
                  <div className="login-form">
                    <h3>Create Category</h3>

                    <form onSubmit={onFormSubmit} className="default-form">
                      <div className="row">
                        <div className="form-group">
                          <label>Category Title</label>
                          <input
                            type="text"
                            name="category"
                            placeholder="Enter category"
                            required
                            validaterule={["required", "isName"]}
                            validatemsg={[
                              "category is required",
                              "Enter valid category name",
                            ]}
                            value={userData.category}
                            onChange={handleOnChange}
                          />
                          <p className="invalid_input">{errors.category}</p>
                        </div>
                        {userData.sub_category.length > 0 && (
                          <div className="form-group col-lg-12 col-md-12">
                            <label>Sub Categories List </label>
                            {userData.sub_category.map((sub_cat, key) => {
                              return (
                                <div className="sub_cat_item" key={key}>
                                  {sub_cat}
                                  <span
                                    className="mx-2"
                                    onClick={() => {
                                      delteSubcat(key);
                                    }}
                                  >
                                    X
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        <div className="form-group col-lg-9 col-md-12">
                          <label>Sub Category Title</label>
                          <input
                            type="text"
                            name="sub_cat_text"
                            placeholder="Enter sub category"
                            validaterule={["notRequired", "isName"]}
                            validatemsg={["Enter valid sub category"]}
                            value={userData.sub_cat_text}
                            onChange={handleOnChange}
                          />
                          <p className="invalid_input">{errors.sub_cat_text}</p>
                        </div>
                        <div className="form-group col-lg-3 col-md-12">
                          <label> ADD</label>
                          <div className="btn-box">
                            <button
                              className="theme-btn btn-style-three"
                              type="button"
                              onClick={addSubCategory}
                            >
                              <span className="la la-plus" />
                            </button>
                          </div>
                        </div>

                        <div className="form-group">
                          <button
                            className="theme-btn btn-style-one"
                            type="submit"
                            name="log-in"
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EditModal />
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
                ADD <span className="la la-plus" />
              </a>
            </div>
          </div>
        </div>

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
                              <button
                                data-bs-toggle="modal"
                                data-bs-target="#editPopupModal"
                                data-text="Edit Job Category"
                              >
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
    </LoadingOverlay>
  );
};

export default JobAlertsTable;
