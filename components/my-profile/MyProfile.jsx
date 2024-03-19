"use client";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import MenuToggler from "@/components/dashboard/MenuToggler";
import { BUCKET_DOMAIN, getFileExtension } from "@/helper/Helper";
import axios from "@/helper/axios";
import config from "@/helper/config";
import validation from "@/helper/validation";
import _ from "lodash";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../common/loader/Loader";
import Image from "next/image";

export default function MyProfile() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    job_title: "",
    mobile: "",
    email: "",
    website: "",
    experiance: "",
    education: "",
    languages: "",
    showInSearch: "",
    description: "",
    avatar: "",
  });
  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    getProfiledetails();
  }, []);

  const getProfiledetails = () => {
    setLoading(true);

    axios
      .get("/auth/profil-details", config())
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          let { userDetails } = res.data;
          localStorage.setItem("userDetails", JSON.stringify(userDetails));
          for (const [key, value] of Object.entries(userDetails)) {
            formData[key] = value;
            setFormData({ ...formData });
          }
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error("Something Went Wrong!!!");
      });
  };

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    formData[name] = value;

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

  const handleImages = (e) => {
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
        setProfileImage(file);
      } else {
        toast.error("The file format is not supported");
      }
    }
  };

  const isValidForm = (errors) => {
    for (const [, value] of Object.entries(errors)) {
      if (value.length > 0) {
        return false;
      }
    }
    return true;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (isValidForm(errors)) {
      if (!profileImage && !formData.avatar) {
        toast.error("Please select profile image");
        return;
      }
      if (profileImage) {
        uploadProfileImage();
      } else {
        updateProfile();
      }
    }
  };

  const uploadProfileImage = () => {
    let data = new FormData();

    data.append("avatar", profileImage);
    data.append("avatar_name", formData.avatar || "");

    setLoading(true);
    axios
      .post("/auth/upload-profile-image", data, config())
      .then((res) => {
        if (res.data.success) {
          let { avatar } = res.data;
          setProfileImage("");
          updateProfile(avatar);
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

  const updateProfile = (avatar = null) => {
    setLoading(true);
    if (avatar) {
      formData.avatar = avatar;
    }
    axios
      .put("/auth/update-profile", formData, config())
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          toast.success(res.data.message);
          getProfiledetails();
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
    <section className="user-dashboard">
      {loading && <Loader />}
      <div className="dashboard-outer">
        <BreadCrumb title="My Profile!" />

        <MenuToggler />

        <div className="row">
          <div className="col-lg-12">
            <div className="ls-widget">
              <div className="tabs-box">
                <div className="widget-title">
                  <h4>My Profile</h4>
                </div>
                <div className="widget-content">
                  <div className="uploading-outer">
                    <div className="uploadButton">
                      <input
                        className="uploadButton-input"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        id="upload"
                        required
                        onChange={handleImages}
                      />
                      <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                      >
                        {profileImage?.name || "Browse Logo"}
                      </label>
                      <span className="uploadButton-file-name"></span>
                    </div>
                    <div className="text">
                      Max file size is 1MB, Minimum dimension: 330x300 And
                      Suitable files are .jpg & .png
                    </div>

                    <figure className="image ms-5">
                      {profileImage ? (
                        <Image
                          width={100}
                          height={100}
                          src={URL.createObjectURL(profileImage)}
                          alt="Profile photo"
                        />
                      ) : (
                        <Image
                          src={
                            formData.avatar
                              ? BUCKET_DOMAIN + formData.avatar
                              : "/images/resource/candidate-1.png"
                          }
                          width={100}
                          height={100}
                          alt="Avatar"
                        />
                      )}
                    </figure>
                  </div>

                  <form onSubmit={handleOnSubmit} className="default-form">
                    <div className="row">
                      <div className="form-group col-lg-6 col-md-12">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Jerome"
                          required
                          value={formData.name}
                          validaterule={["required", "isName"]}
                          validatemsg={["Name is required"]}
                          onChange={handleOnChange}
                        />
                        <p className="invalid_input">{errors.name}</p>
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Job Title</label>
                        <input
                          type="text"
                          name="job_title"
                          placeholder="UI Designer"
                          required
                          value={formData.job_title}
                          validaterule={["required"]}
                          validatemsg={["Job title is required"]}
                          onChange={handleOnChange}
                        />
                        <p className="invalid_input">{errors.job_title}</p>
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Phone</label>
                        <input
                          type="text"
                          name="mobile"
                          placeholder="0 123 456 7890"
                          required
                          readOnly
                          value={formData.mobile}
                        />
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Email address</label>
                        <input
                          type="text"
                          name="email"
                          readOnly
                          value={formData.email}
                        />
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Website</label>
                        <input
                          type="text"
                          name="website"
                          placeholder="www.jerome.com"
                          value={formData.website}
                          validaterule={["notRequired", "isUrl"]}
                          validatemsg={["ennter valid website"]}
                          onChange={handleOnChange}
                        />
                        <p className="invalid_input">{errors.website}</p>
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Experience</label>

                        <select
                          name="experiance"
                          className="chosen-single form-select"
                          required
                          onChange={handleOnChange}
                          value={formData.experiance}
                        >
                          <option value="">Experiance</option>
                          <option value="beginers">&lt; 1 year</option>
                          <option value="one_three">1 - 3 years</option>
                          <option value="three_five">3 - 5 years</option>
                          <option value="above_five">&gt; 5 years</option>
                        </select>
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Education Levels</label>
                        <input
                          type="text"
                          name="education"
                          placeholder="Certificate"
                          required
                          value={formData.education}
                          validaterule={["required"]}
                          validatemsg={["Education is required"]}
                          onChange={handleOnChange}
                        />
                        <p className="invalid_input">{errors.education}</p>
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Languages</label>
                        <input
                          type="text"
                          name="languages"
                          placeholder="English, Turkish"
                          required
                          value={formData.languages}
                          validaterule={["required"]}
                          validatemsg={["Language is required"]}
                          onChange={handleOnChange}
                        />
                        <p className="invalid_input">{errors.languages}</p>
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <label>Allow In Search & Listing</label>
                        <select
                          name="showInSearch"
                          className="chosen-single form-select"
                          required
                          value={formData.showInSearch}
                          onChange={handleOnChange}
                        >
                          <option value={true}>Yes</option>
                          <option value={false}>No</option>
                        </select>
                      </div>

                      <div className="form-group col-lg-12 col-md-12">
                        <label>Description</label>
                        <textarea
                          name="description"
                          required
                          value={formData.description}
                          placeholder="description"
                          onChange={handleOnChange}
                        />
                      </div>

                      <div className="form-group col-lg-6 col-md-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Ls widget --> */}

            <div className="ls-widget">
              <div className="tabs-box">
                <div className="widget-title">
                  <h4>Social Network</h4>
                </div>
                {/* End widget-title */}

                <div className="widget-content">
                  <form className="default-form">
                    <div className="row">
                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-6 col-md-12">
                        <label>Facebook</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="www.facebook.com/Invision"
                          required
                        />
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-6 col-md-12">
                        <label>Twitter</label>
                        <input
                          type="text"
                          name="name"
                          placeholder=""
                          required
                        />
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-6 col-md-12">
                        <label>Linkedin</label>
                        <input
                          type="text"
                          name="name"
                          placeholder=""
                          required
                        />
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-6 col-md-12">
                        <label>Google Plus</label>
                        <input
                          type="text"
                          name="name"
                          placeholder=""
                          required
                        />
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-6 col-md-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Ls widget --> */}

            <div className="ls-widget">
              <div className="tabs-box">
                <div className="widget-title">
                  <h4>Contact Information</h4>
                </div>
                {/* End widget-title */}
                <div className="widget-content">
                  <form className="default-form">
                    <div className="row">
                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-6 col-md-12">
                        <label>Country</label>
                        <select className="chosen-single form-select" required>
                          <option>Australia</option>
                          <option>Pakistan</option>
                          <option>Chaina</option>
                          <option>Japan</option>
                          <option>India</option>
                        </select>
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-6 col-md-12">
                        <label>City</label>
                        <select className="chosen-single form-select" required>
                          <option>Melbourne</option>
                          <option>Pakistan</option>
                          <option>Chaina</option>
                          <option>Japan</option>
                          <option>India</option>
                        </select>
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-12 col-md-12">
                        <label>Complete Address</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
                          required
                        />
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-6 col-md-12">
                        <label>Find On Map</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
                          required
                        />
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-3 col-md-12">
                        <label>Latitude</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Melbourne"
                          required
                        />
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-3 col-md-12">
                        <label>Longitude</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Melbourne"
                          required
                        />
                      </div>

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-12 col-md-12">
                        <button className="theme-btn btn-style-three">
                          Search Location
                        </button>
                      </div>
                      {/* End MapBox */}

                      {/* <!-- Input --> */}
                      <div className="form-group col-lg-12 col-md-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Ls widget --> */}
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End dashboard-outer */}
    </section>
  );
}
