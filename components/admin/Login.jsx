"use client";
import dynamic from "next/dynamic";
import axios from "@/helper/axios";
import validation from "@/helper/validation";
import { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
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
      let userDetails = JSON.parse(localStorage.getItem("userDetails"));
      if (userDetails.isAdmin) {
        router.push("/admin/dashboard");
      }
    }
  }, []);

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
        .post("/auth/admin-login", userData)
        .then((res) => {
          setLoading(false);
          if (res.data.success) {
            toast.success(res.data.message);

            let { token, userDetails } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            router.push("/admin/dashboard");
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
      <div className="login-section">
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
                  <label>Email</label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
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
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default dynamic(() => Promise.resolve(AdminLogin), { ssr: false });
