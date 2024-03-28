"use client";

import { BUCKET_DOMAIN, getFileExtension } from "@/helper/Helper";
import axios from "@/helper/axios";
import config from "@/helper/config";
import Loader from "@/helper/loader/Loader";
import validation from "@/helper/validation";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function EditJob({ params }) {
  const dispatch = useDispatch();
  const { walletDetails } = useSelector((state) => state.wallet);

  const [formData, setFormData] = useState({
    banner: "",
    category: "",
    sub_category: "",
    title: "",
    quentity: null,
    worker_price: null,
    proof: "optional",
    total_budget: 0,
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [jobCategory, setJobCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [walletBalance, setWalletBalance] = useState(0);

  const id = params.id;

  useEffect(() => {
    if (!walletDetails.success) {
      toast.error(walletDetails.message);
      return;
    }
    const { balance } = walletDetails.wallet;
    setWalletBalance(balance);
  }, [walletDetails]);

  useEffect(() => {
    getJobDetails();
    getAllCategories();
  }, [id]);

  const getJobDetails = () => {
    setLoading(true);
    axios
      .get(`/job/job/${id}`, config())
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { job } = res.data;

          for (const [key, value] of Object.entries(job)) {
            if (key === "category") {
              formData.category = value._id;
              setSubCategory(value.sub_category);
            } else {
              formData[key] = value;
            }
            setFormData({ ...formData });
          }
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

  const getAllCategories = () => {
    setLoading(true);
    axios
      .get("/job/categories")
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { job_category } = res.data;

          setJobCategory(job_category);
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

  const handleImage = (e) => {
    e.persist();

    let { files } = e.target;

    let file = files[0];
    let validExtension = ["png", "jpg", "jpeg"];
    if (file !== undefined) {
      let extension = getFileExtension(file);
      if (
        extension !== undefined &&
        _.findIndex(validExtension, (exe) => {
          return exe === extension;
        }) !== -1
      ) {
        setImage(file);
      } else {
        toast.error("The file format is not supported");
      }
    }
  };

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    formData[name] = value;

    if (name === "category") {
      let { sub_category } = _.find(jobCategory, (o) => {
        return o._id === value;
      });
      setSubCategory(sub_category);
      formData.sub_category = "";
    }
    if (name === "quentity") {
      let { worker_price } = formData;
      if (worker_price) {
        worker_price = Number(worker_price);
        let val = Number(value);
        formData.total_budget = val * worker_price;
      }
    }
    if (name === "worker_price") {
      let { quentity } = formData;
      if (quentity) {
        quentity = Number(quentity);
        let val = Number(value);
        formData.total_budget = val * quentity;
      }
    }

    setFormData({ ...formData });

    const valid_obj = {
      value,
      rules: e.target.getAttribute("validaterule"),
      message: e.target.getAttribute("validatemsg"),
    };

    validation(valid_obj).then((err) => {
      setErrors({ ...errors, [name]: err });
    });
  };

  const handleOnSumit = (e) => {
    e.preventDefault();

    // if (isValidForm(errors)) {
    //   if (walletBalance === 0 || walletBalance < formData.total_budget) {
    //     toast.error("No sufficient balance. Please add balance");
    //     return;
    //   }

    //   if (image === null) {
    //     toast.error("Please add job banner");
    //     return;
    //   }
    //   if (!formData.description) {
    //     toast.error("Please add job description");
    //     return;
    //   }
    //   uploadImage();
    // }
  };

  return (
    <section className="user-dashboard">
      {loading && <Loader />}
      <div className="dashboard-outer">
        <div className="row">
          <div className="col-lg-12">
            <div className="ls-widget">
              <div className="tabs-box">
                <div className="widget-title">
                  <h4>Edit Job</h4>
                </div>

                <div className="widget-content">
                  <div className="post-job-steps">
                    <div className="step">
                      <span className="icon flaticon-briefcase"></span>
                      <h5>Job Detail</h5>
                    </div>

                    <div className="step">
                      <span className="icon flaticon-money"></span>
                      <h5>Package & Payments</h5>
                    </div>

                    <div className="step">
                      <span className="icon flaticon-checked"></span>
                      <h5>Confirmation</h5>
                    </div>
                  </div>

                  <form className="default-form" onSubmit={handleOnSumit}>
                    <div className="row">
                      <div className="form-group col-lg-12 col-md-12">
                        <div className="widget-title">
                          <h4>Job Banner</h4>
                        </div>

                        <div className="widget-content">
                          <div className="uploading-outer">
                            <div className="uploadButton">
                              <input
                                className="uploadButton-input"
                                type="file"
                                name="banner"
                                accept="image/png, image/jpg, image/jpeg"
                                id="upload"
                                onChange={handleImage}
                              />
                              <label
                                className="uploadButton-button ripple-effect"
                                htmlFor="upload"
                              >
                                Browse Logo
                              </label>
                              <span className="uploadButton-file-name" />
                            </div>
                            <div className="text">
                              {image ? (
                                <img
                                  src={URL.createObjectURL(image)}
                                  alt="banner"
                                />
                              ) : (
                                <img
                                  src={BUCKET_DOMAIN + formData.banner}
                                  alt="banner"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Category </label>
                        <span className="text-danger">*</span>

                        <select
                          name="category"
                          required
                          validaterule={["required"]}
                          validatemsg={["category is required"]}
                          value={formData.category}
                          onChange={handleOnChange}
                        >
                          <option value="">Select Category</option>
                          {jobCategory.map((category, key) => {
                            return (
                              <option key={key} value={category._id}>
                                {category.category}
                              </option>
                            );
                          })}
                        </select>
                        <p className="invalid_input">{errors.category}</p>
                      </div>

                      {subCategory.length > 0 && (
                        <div className="form-group col-lg-6 col-md-12">
                          <label>Subcategory </label>
                          <span className="text-danger">*</span>

                          <select
                            name="sub_category"
                            required
                            validaterule={["required"]}
                            validatemsg={["sub category is required"]}
                            value={formData.sub_category}
                            onChange={handleOnChange}
                          >
                            <option value="">Select Category</option>
                            {subCategory.map((sub_cat, key) => {
                              return (
                                <option key={key} value={sub_cat}>
                                  {sub_cat}
                                </option>
                              );
                            })}
                          </select>
                          <p className="invalid_input">{errors.sub_category}</p>
                        </div>
                      )}
                    </div>
                  </form>

                  {/* <PostJobSteps />
                  <PostForm /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
