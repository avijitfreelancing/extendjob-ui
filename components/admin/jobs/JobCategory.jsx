"use client";

import dynamic from "next/dynamic";
import axios from "@/helper/axios";
import { useEffect, useState } from "react";
import validation from "@/helper/validation";
import _ from "lodash";
import { toast } from "react-toastify";
import adminConfig from "@/helper/adminConfig";
import Loader from "@/helper/loader/Loader";

const JobCategory = () => {
  const [userData, setUserData] = useState({
    category: "",
    sub_category: [],
    sub_cat_text: "",
    id: "",
    icon: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [subCatPos, setSubCatPos] = useState(-1);

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = () => {
    setLoading(true);

    axios
      .get("/job/all-categories", adminConfig())
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { job_category } = res.data;
          setAllCategories(job_category);
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
      id: "",
      icon: "",
    });
    setErrors({});
    setSubCatPos(-1);
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
        .post("/job/add-category", userData, adminConfig())
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

  const activeInactiveCategory = (id) => {
    setLoading(true);

    axios
      .put("/job/active-inactive-category", { id }, adminConfig())
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          toast.success(res.data.message);
          getAllCategory();
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

  const onEditCategorySubmit = (e) => {
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
        .put("/job/update-category", userData, adminConfig())
        .then((res) => {
          setLoading(false);
          if (res.data.success) {
            toast.success(res.data.message);
            clearUserData();
            getAllCategory();
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

  const updateSubCategory = () => {
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

    sub_category[subCatPos] = sub_cat_text;
    userData.sub_cat_text = "";
    userData.sub_category = [...sub_category];
    setUserData({ ...userData });
    setSubCatPos(-1);
  };

  return (
    <section className="user-dashboard">
      {loading && <Loader />}

      <div className="dashboard-outer">
        <div className="row">
          <div className="col-lg-12">
            <div className="ls-widget">
              <div className="tabs-box">
                {/* ADD category modal */}
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

                            <form
                              onSubmit={onFormSubmit}
                              className="default-form"
                            >
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
                                  <p className="invalid_input">
                                    {errors.category}
                                  </p>
                                </div>

                                <div className="form-group">
                                  <label>Icon</label>
                                  <select
                                    name="icon"
                                    required
                                    validaterule={["required"]}
                                    validatemsg={["Icon is required"]}
                                    value={userData.icon}
                                    onChange={handleOnChange}
                                  >
                                    <option value="">Select icon</option>
                                    <option value="iii">hhjj</option>
                                  </select>
                                  <p className="invalid_input">{errors.icon}</p>
                                </div>

                                {userData.sub_category.length > 0 && (
                                  <div className="form-group col-lg-12 col-md-12">
                                    <label>Sub Categories List </label>
                                    <div className="row">
                                      {userData.sub_category.map(
                                        (sub_cat, key) => {
                                          return (
                                            <div
                                              key={key}
                                              className="content-column col-lg-6 col-md-12 col-sm-12"
                                            >
                                              <div className="ls-outer">
                                                <div className="company-block-three">
                                                  <div className="inner-box">
                                                    {sub_cat}
                                                    <button className="bookmark-btn">
                                                      <span
                                                        onClick={() => {
                                                          setSubCatPos(key);
                                                          userData.sub_cat_text =
                                                            sub_cat;
                                                          setUserData({
                                                            ...userData,
                                                          });
                                                        }}
                                                        className="la la-edit mr-30"
                                                      />
                                                      <span
                                                        onClick={() => {
                                                          delteSubcat(key);
                                                        }}
                                                        className="la la-trash text-danger"
                                                      />
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
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
                                  <p className="invalid_input">
                                    {errors.sub_cat_text}
                                  </p>
                                </div>
                                <div className="form-group col-lg-3 col-md-12">
                                  <label>ADD</label>
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

                {/* EDIT category modal */}
                <div className="modal fade" id="editPopupModal">
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
                            <h3>Update Category</h3>

                            <form
                              onSubmit={onEditCategorySubmit}
                              className="default-form"
                            >
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
                                  <p className="invalid_input">
                                    {errors.category}
                                  </p>
                                </div>
                                {userData.sub_category.length > 0 && (
                                  <div className="form-group col-lg-12 col-md-12">
                                    <label>Sub Categories List </label>

                                    {userData.sub_category.map(
                                      (sub_cat, key) => {
                                        return (
                                          <div
                                            className="sub_cat_item"
                                            key={key}
                                          >
                                            {sub_cat}
                                            <span
                                              onClick={() => {
                                                setSubCatPos(key);
                                                userData.sub_cat_text = sub_cat;
                                                setUserData({ ...userData });
                                              }}
                                              className="la la-pen"
                                            />
                                            <span
                                              onClick={() => {
                                                delteSubcat(key);
                                              }}
                                              className="la la-times-circle"
                                            />
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                )}
                                <div className="form-group col-lg-8 col-md-12">
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
                                  <p className="invalid_input">
                                    {errors.sub_cat_text}
                                  </p>
                                </div>

                                {subCatPos !== -1 ? (
                                  <>
                                    <div className="form-group col-lg-2 col-md-12">
                                      <label>Update</label>
                                      <div className="btn-box">
                                        <button
                                          className="theme-btn btn-style-three"
                                          type="button"
                                          onClick={updateSubCategory}
                                        >
                                          <span className="la la-check" />
                                        </button>
                                      </div>
                                    </div>
                                    <div className="form-group col-lg-2 col-md-12">
                                      <label>Cancel</label>
                                      <div className="btn-box">
                                        <button
                                          className="theme-btn btn-style-three"
                                          type="button"
                                          onClick={() => {
                                            setSubCatPos(-1);
                                            userData.sub_cat_text = "";
                                            setUserData({ ...userData });
                                          }}
                                        >
                                          <span className="la la-times" />
                                        </button>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <div className="form-group col-lg-3 col-md-12">
                                    <label>Add</label>
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
                                )}

                                <div className="form-group">
                                  <button
                                    className="theme-btn btn-style-one"
                                    type="submit"
                                    name="log-in"
                                  >
                                    Update
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

                <div className="widget-title">
                  <h4>Job Category</h4>

                  <div className="chosen-outer">
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
                            <th>Category</th>
                            <th>Sub Category</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {allCategories.map((item, key) => (
                            <tr key={key}>
                              <td>
                                <div className="job-block">
                                  <div className="inner-box">
                                    <h4>{item.category}</h4>
                                  </div>
                                </div>
                              </td>
                              <td>
                                {item.sub_category.map((sub, key) => {
                                  return (
                                    <div className="subcat" key={key}>
                                      {sub}
                                    </div>
                                  );
                                })}
                              </td>

                              <td>
                                <div className="option-box">
                                  <ul className="option-list">
                                    <li>
                                      <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#editPopupModal"
                                        data-text="Edit Job Category"
                                        onClick={() => {
                                          userData.category = item.category;
                                          userData.sub_category = [
                                            ...item.sub_category,
                                          ];
                                          userData.id = item._id;
                                          setUserData({ ...userData });
                                        }}
                                      >
                                        <span className="la la-edit" />
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        data-text={
                                          item.active
                                            ? "Inactive Job Category"
                                            : "Active Job Category"
                                        }
                                        onClick={() => {
                                          activeInactiveCategory(item._id);
                                        }}
                                      >
                                        <span
                                          className={
                                            item.active
                                              ? "la la-eye-slash"
                                              : "la la-eye"
                                          }
                                        />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(JobCategory), { ssr: false });
