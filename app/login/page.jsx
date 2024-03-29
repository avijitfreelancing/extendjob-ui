"use client";
import dynamic from "next/dynamic";
import LoginWithSocial from "@/components/common/form/login/LoginWithSocial";
import axios from "@/helper/axios";
import validation from "@/helper/validation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "@/helper/loader/Loader";

const validEmailRegex = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
const userNameRegex = RegExp(/^[a-zA-Z0-9_]{6,20}$/);

const Login = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
    let err = "";

    if (name === "email") {
      if (value.includes("@")) {
        if (validEmailRegex.test(value)) {
          err = "";
        } else {
          err = "Enter valid email address";
        }
      } else {
        if (userNameRegex.test(value)) {
          err = "";
        } else {
          err =
            "Invalid username. Please use only letters or numbers or underscores and be 6 to 20 characters long.";
        }
      }
      errors.email = err;
      setErrors({ ...errors });
      return;
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
        .post("/auth/login", userData)
        .then((res) => {
          setLoading(false);
          if (res.data.success) {
            toast.success(res.data.message);
            setUserData({
              email: "",
              password: "",
            });

            let { token, userDetails, isProfileComplete, wallet } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            localStorage.setItem("isProfileComplete", isProfileComplete);

            if (!isProfileComplete) {
              router.push("/my-profile");
            } else {
              router.push("/dashboard");
            }

            // router.reload();
            // window.location.reload();
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
    <div className="login-section">
      {loading && <Loader />}
      <div
        className="image-layer"
        style={{ backgroundImage: "url(/images/background/12.jpg)" }}
      />
      <div className="outer-box">
        <div className="login-form default-form">
          <div className="form-inner">
            <h3>Login</h3>

            <form onSubmit={onFormSubmit}>
              <div className="form-group">
                <label>Username or Email</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter username or email"
                  validaterule={["required"]}
                  validatemsg={["username or email is required"]}
                  value={userData.email}
                  onChange={handleOnChange}
                  required
                />
                <p className="invalid_input text-danger">{errors.email}</p>
              </div>

              <div className="form-group">
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
                <p className="invalid_input text-danger">{errors.password}</p>
              </div>

              <div className="form-group">
                <div className="field-outer">
                  {/* <div className="input-group checkboxes square">
                      <input type="checkbox" name="remember-me" id="remember" />
                      <label htmlFor="remember" className="remember">
                        <span className="custom-checkbox"></span> Remember me
                      </label>
                    </div> */}
                  <a href="#" className="pwd">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="form-group">
                <button
                  className="theme-btn btn-style-one"
                  type="submit"
                  name="log-in"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="bottom-box">
              <div className="text">
                Don&apos;t have an account? <Link href="/register">Signup</Link>
              </div>

              <div className="divider">
                <span>or</span>
              </div>

              <LoginWithSocial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
