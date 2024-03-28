"use client";

import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "react-toastify";
import _ from "lodash";
import axios from "@/helper/axios";
import validation from "@/helper/validation";
import config from "@/helper/config";
import { getFileExtension } from "@/helper/Helper";
import Loader from "@/helper/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getWalletBalance } from "@/reducers/WalletSlice";

const PostForm = () => {
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
    getAllCategories();
  }, []);

  useEffect(() => {
    if (!walletDetails.success) {
      toast.error(walletDetails.message);
      return;
    }
    const { balance } = walletDetails.wallet;
    setWalletBalance(balance);
  }, [walletDetails]);

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

  const isValidForm = (errors) => {
    let isValid = true;
    for (const [, value] of Object.entries(errors)) {
      if (value.length > 0) {
        isValid = false;
      }
    }
    return isValid;
  };

  const handleOnSumit = (e) => {
    e.preventDefault();

    if (isValidForm(errors)) {
      if (walletBalance === 0 || walletBalance < formData.total_budget) {
        toast.error("No sufficient balance. Please add balance");
        return;
      }

      if (image === null) {
        toast.error("Please add job banner");
        return;
      }
      if (!formData.description) {
        toast.error("Please add job description");
        return;
      }
      uploadImage();
    }
  };

  const uploadImage = () => {
    let data = new FormData();

    data.append("image", image);

    setLoading(true);
    axios
      .post("/job/upload-job-banner", data, config())
      .then((res) => {
        if (res.data.success) {
          let { url } = res.data;
          addJob(url);
        } else {
          setLoading(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error("Something Went Wrong");
      });
  };

  const addJob = (url) => {
    setLoading(true);
    formData.banner = url;
    axios
      .post("/job/add-job", formData, config())
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          toast.success(res.data.message);

          setFormData({
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
          setSubCategory([]);
          setImage(null);
          dispatch(getWalletBalance());
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error("Something Went Wrong");
      });
  };

  return (
    <form className="default-form" onSubmit={handleOnSumit}>
      {loading && <Loader />}

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
                {image && <img src={URL.createObjectURL(image)} alt="banner" />}
              </div>
            </div>
            {/* End logo and cover photo components */}
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

        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <span className="text-danger">*</span>

          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            validaterule={["required", "isName"]}
            validatemsg={["Title is required", "Enter a valid title"]}
            value={formData.title}
            onChange={handleOnChange}
          />
          <p className="invalid_input">{errors.title}</p>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Quantity (Minimum 5 Jobs )</label>
          <span className="text-danger">*</span>
          <input
            type="text"
            name="quentity"
            required
            validaterule={["required", "isQuentity"]}
            validatemsg={["Quantity is required"]}
            value={formData.quentity || ""}
            onChange={handleOnChange}
          />
          <p className="invalid_input">{errors.quentity}</p>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Worker will earn ( Minimum Job Price = 0.02 ) USD</label>
          <span className="text-danger">*</span>
          <input
            type="text"
            name="worker_price"
            required
            validaterule={["required", "isPrice"]}
            validatemsg={["Worker price is required"]}
            value={formData.worker_price || ""}
            onChange={handleOnChange}
          />
          <p className="invalid_input">{errors.worker_price}</p>
        </div>

        <div className="form-group col-lg-8 col-md-12">
          <label>Job Prof </label>
          <span className="text-danger">*</span>
          <select
            className="chosen-single form-select"
            required
            name="proof"
            value={formData.proof}
            onChange={handleOnChange}
          >
            <option value="optional">Optional</option>
            <option value="required">Required</option>
          </select>
        </div>

        <div className="form-group col-lg-4 col-md-12">
          <label>Total Budget</label>
          <input
            type="text"
            readOnly
            name="total_budget"
            placeholder="0.00"
            value={formData.total_budget}
          />
        </div>

        {formData.proof === "required" && (
          <div className="form-group col-lg-12 col-md-12">
            <div className="row" id="choiceOption">
              <label> Select File Upload Option</label>
              <div className="input-group">
                {/* <div className="form-group me-2 switchbox">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                    <span className="title">Select All</span>
                  </label>
                </div> */}
                <div className="form-group me-2 switchbox">
                  <label className="switch">
                    <input type="checkbox" checked readOnly />
                    <span className="slider round"></span>
                    <span className="title">png</span>
                  </label>
                </div>
                <div className="form-group me-2 switchbox">
                  <label className="switch">
                    <input type="checkbox" checked readOnly />
                    <span className="slider round"></span>
                    <span className="title">jpg</span>
                  </label>
                </div>
                <div className="form-group me-2 switchbox">
                  <label className="switch">
                    <input type="checkbox" checked readOnly />
                    <span className="slider round"></span>
                    <span className="title">jpeg</span>
                  </label>
                </div>
                <div className="form-group me-2 switchbox">
                  <label className="switch">
                    <input type="checkbox" checked readOnly />
                    <span className="slider round"></span>
                    <span className="title">webp</span>
                  </label>
                </div>
                <div className="form-group me-2 switchbox">
                  <label className="switch">
                    <input type="checkbox" checked readOnly />
                    <span className="slider round"></span>
                    <span className="title">txt</span>
                  </label>
                </div>
                <div className="form-group me-2 switchbox">
                  <label className="switch">
                    <input type="checkbox" checked readOnly />
                    <span className="slider round"></span>
                    <span className="title">csv</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="form-group col-lg-12 col-md-12">
          <label>Job Description</label>
          <span className="text-danger">*</span>
          <CKEditor
            required
            editor={ClassicEditor}
            onChange={(event, editor) => {
              formData.description = editor.getData();
              setFormData({ ...formData });
            }}
            data={formData.description}
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
