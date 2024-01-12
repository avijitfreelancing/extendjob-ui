"use client";
import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import validation from "@/helper/validation";
import axios from "@/helper/axios";
import { toast } from "react-toastify";
import Loader from "../../loader/Loader";
import { useState } from "react";

const FormContent = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
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
        .post("/auth/login", userData)
        .then((res) => {
          setLoading(false);
          if (res.data.success) {
            toast.success(res.data.message);
            setUserData({
              email: "",
              password: "",
            });

            let { token, userDetails } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
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
    <div className="form-inner">
      <h3>Login to Superio</h3>

      {loading && <Loader />}

      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>Email</label>
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

        <div className="form-group">
          <label>Password</label>
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

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
