"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import Form from "./FormContent";
import Link from "next/link";
import { useState } from "react";
import axios from "@/helper/axios";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    user_type: "1",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
            alert(res.data.message);
            setUserData({
              email: "",
              password: "",
              user_type: "1",
            });
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          alert("Something went wrong !!!");
        });
    }
  };

  return (
    <div className="form-inner">
      <h3>Create a Free Superio Account</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button
                className="theme-btn btn-style-four"
                onClick={() => {
                  userData.user_type = "1";
                  setUserData(userData);
                }}
              >
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button
                className="theme-btn btn-style-four"
                onClick={() => {
                  userData.user_type = "2";
                  setUserData(userData);
                }}
              >
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <Form
            userData={userData}
            setUserData={setUserData}
            errors={errors}
            setErrors={setErrors}
            onFormSubmit={onFormSubmit}
          />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <Form
            userData={userData}
            setUserData={setUserData}
            errors={errors}
            setErrors={setErrors}
            onFormSubmit={onFormSubmit}
          />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link
            href="#"
            className="call-modal login"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            data-bs-target="#loginPopupModal"
          >
            LogIn
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

export default Register;
