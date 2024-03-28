"use client";

import { getFileExtension } from "@/helper/Helper";
import Loader from "@/helper/loader/Loader";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function EditJob() {
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

  useEffect(() => {
    if (!walletDetails.success) {
      toast.error(walletDetails.message);
      return;
    }
    const { balance } = walletDetails.wallet;
    setWalletBalance(balance);
  }, [walletDetails]);

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
                              {image && (
                                <img
                                  src={URL.createObjectURL(image)}
                                  alt="banner"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
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
