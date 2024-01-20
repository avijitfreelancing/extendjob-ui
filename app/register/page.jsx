"use client";
import dynamic from "next/dynamic";
import Header from "./Header";
import MobileMenu from "@/components/header/MobileMenu";
import Link from "next/link";
import validation from "@/helper/validation";
import { useEffect, useState } from "react";
import axios from "@/helper/axios";
import LoadingOverlay from "react-loading-overlay";
import countries from "@/helper/countries";
import _ from "lodash";
import { toast } from "react-toastify";

// export const metadata = {
//   title: "Register || Superio - Job Borad React NextJS Template",
//   description: "Superio - Job Borad React NextJS Template",
// };

const index = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    c_password: "",
    calling_code: "",
    country_code: "",
    selected_country: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.ipregistry.co/?key=tryout")
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        let { code, calling_code } = payload.location.country;
        let selected_country = _.findIndex(countries, (o) => {
          return o.calling_code === calling_code;
        });
        userData.calling_code = "+" + calling_code;
        userData.country_code = code;
        userData.selected_country = selected_country;
        setUserData({ ...userData });
      });
  }, []);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });

    if (name === "c_password") {
      let err;
      if (userData.password !== value) {
        err = "Confirm Password should be same as password";
      } else {
        err = "";
      }
      errors.c_password = err;

      setErrors({ ...errors });
      return;
    }

    if (name === "password") {
      let err;
      if (userData.c_password && userData.c_password !== value) {
        err = "Confirm Password should be same as password";
      } else {
        err = "";
      }
      errors.c_password = err;
      setErrors({ ...errors });
    }

    if (name === "selected_country") {
      let { country_code, calling_code } = countries[value];

      userData.calling_code = "+" + calling_code;
      userData.country_code = country_code;
      userData.selected_country = value;

      setUserData({ ...userData });
    }

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

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (isValidForm(errors)) {
      setLoading(true);
      axios
        .post("/auth/register", userData)
        .then((res) => {
          setLoading(false);
          if (res.data.success) {
            toast.success(res.data.message);
            setUserData({
              username: "",
              email: "",
              password: "",
              c_password: "",
              calling_code: "",
              country_code: "",
              selected_country: "",
              mobile: "",
            });
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
      <Header />

      <MobileMenu />

      <div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(/images/background/12.jpg)" }}
        />
        <div className="outer-box">
          <div className="login-form default-form">
            <div className="form-inner">
              <h3>Create a Free Extend-job Account</h3>

              <form onSubmit={onFormSubmit}>
                <div className="row">
                  <div className="form-group col-lg-6 col-md-12">
                    <label>User Name</label>
                    <span className="text-danger">*</span>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      validaterule={["required", "userName"]}
                      validatemsg={["username is required"]}
                      value={userData.username}
                      onChange={handleOnChange}
                      required
                    />
                    <p className="invalid_input">{errors.username}</p>
                  </div>

                  <div className="form-group col-lg-6 col-md-12">
                    <label>Email Address</label>
                    <span className="text-danger">*</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      validaterule={["required", "isEmail"]}
                      validatemsg={[
                        "Email address is required",
                        "Enter a valid email address",
                      ]}
                      value={userData.email}
                      onChange={handleOnChange}
                      required
                    />
                    <p className="invalid_input">{errors.email}</p>
                  </div>

                  <div className="form-group col-lg-6 col-md-12">
                    <label>Country</label>
                    <span className="text-danger">*</span>
                    <select
                      className="chosen-single form-select"
                      onChange={handleOnChange}
                      name="selected_country"
                      value={userData.selected_country}
                      required
                    >
                      <option value="">Select country</option>
                      {countries.map((data, key) => {
                        return (
                          <option value={key} key={key}>
                            {data.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group col-lg-6 col-md-12">
                    <label>Mobile</label>
                    <span className="text-danger">*</span>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter mobile"
                      validaterule={["required", "isMobile"]}
                      validatemsg={["Mobile is required"]}
                      value={userData.mobile}
                      onChange={handleOnChange}
                      required
                    />
                    <p className="invalid_input">{errors.mobile}</p>
                  </div>

                  <div className="form-group col-lg-6 col-md-12">
                    <label>Password</label>
                    <span className="text-danger">*</span>
                    <input
                      id="password-field"
                      type="password"
                      name="password"
                      placeholder="Password"
                      validaterule={["required", "password"]}
                      validatemsg={["Password is required"]}
                      value={userData.password}
                      onChange={handleOnChange}
                      required
                    />
                    <p className="invalid_input">{errors.password}</p>
                  </div>
                  <div className="form-group col-lg-6 col-md-12">
                    <label>Confirm Password</label>
                    <span className="text-danger">*</span>
                    <input
                      id="cpassword-field"
                      type="password"
                      name="c_password"
                      placeholder="Password"
                      validaterule={["required"]}
                      validatemsg={["Password is required"]}
                      value={userData.c_password}
                      onChange={handleOnChange}
                      required
                    />
                    <p className="invalid_input">{errors.c_password}</p>
                  </div>

                  <div className="form-group">
                    <button className="theme-btn btn-style-one" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <div className="bottom-box">
                <div className="text">
                  Already have an account?{" "}
                  <Link href="/login" className="call-modal login">
                    LogIn
                  </Link>
                </div>
                <div className="divider">
                  <span>or</span>
                </div>
                {/* <LoginWithSocial /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </LoadingOverlay>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
