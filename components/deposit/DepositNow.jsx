"use client";

import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import axios from "@/helper/axios";
import config from "@/helper/config";
import Loader from "@/helper/loader/Loader";
import validation from "@/helper/validation";
import { useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    amount: "",
  });
  const [errors, setErrors] = useState({});

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
      setLoading(true);

      axios
        .post("/wallet/add-balance", formData, config())
        .then((res) => {
          setLoading(false);
          let { approvalUrl } = res.data;
          setFormData({
            amount: "",
          });
          window.open(approvalUrl, "_blank");
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
          toast.error("Something Went Wrong");
        });
    }
  };

  return (
    <section className="user-dashboard">
      {loading && <Loader />}
      <div className="dashboard-outer">
        <BreadCrumb title="Deposit Method!" />

        <div className="row">
          <div className="col-lg-12">
            <div className="ls-widget">
              <div className="tabs-box">
                <div className="widget-title">
                  <h4>Contact Information</h4>
                </div>

                <div className="widget-content">
                  <form className="default-form" onSubmit={handleOnSubmit}>
                    <div className="row">
                      <div className="form-group col-lg-12 col-md-12">
                        <label>Select Gateway</label>
                        <select className="chosen-single form-select" required>
                          <option value="paypal">PayPal</option>
                        </select>
                      </div>

                      <div className="form-group col-lg-12 col-md-12">
                        <label>Amount</label>
                        <input
                          type="text"
                          name="amount"
                          placeholder="0.00"
                          required
                          value={formData.amount}
                          validaterule={["required", "isDecimal"]}
                          validatemsg={[
                            "Amount is required",
                            "Enter valid amount",
                          ]}
                          onChange={handleOnChange}
                        />
                        <p className="invalid_input">{errors.amount}</p>
                      </div>

                      {/* <div className="form-group col-lg-12 col-md-12">
                        Limit
                      </div> */}

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
