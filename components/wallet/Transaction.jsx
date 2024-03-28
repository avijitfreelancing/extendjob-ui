"use client";

import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import { DATE_TIME_HELPER } from "@/helper/Helper";
import axios from "@/helper/axios";
import config from "@/helper/config";
import Loader from "@/helper/loader/Loader";
import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./wallet.css";

export default function Transaction() {
  const [loading, setLoading] = useState(false);
  const [allTransaction, setAllTransaction] = useState([]);

  useEffect(() => {
    getAllTransaction();
  }, []);

  const getAllTransaction = () => {
    setLoading(true);
    axios
      .get(`/wallet/transactions`, config())
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { transactions } = res.data;
          setAllTransaction(transactions);
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
        <BreadCrumb title="Transaction History!" />

        <div className="row">
          <div className="col-lg-12">
            <div className="ls-widget">
              <div className="tabs-box">
                <div className="widget-title">
                  <h4>All Transaction</h4>
                </div>

                <div className="widget-content">
                  <div className="table-outer">
                    <table className="default-table manage-job-table">
                      <thead>
                        <tr>
                          <th>Transaction id</th>
                          <th>Package</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Type</th>
                        </tr>
                      </thead>

                      <tbody>
                        {allTransaction.map((item, key) => {
                          return (
                            <tr key={key}>
                              <td className="trans-id">#{item._id}</td>
                              <td className="expiry">{item.message}</td>
                              {/* <td className="expiry">Jan 11, 2021</td> */}
                              <td className="expiry">
                                {moment(item.createdAt).format(
                                  DATE_TIME_HELPER.JOB_DATE_FORMAT
                                )}
                              </td>
                              <td className="total-jobs">${item.amount}</td>
                              <td
                                className={
                                  item.payment_type === 1 ? "credit" : "debit"
                                }
                              >
                                {item.payment_type === 1 ? "Cr" : "De"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* End widget-content */}
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
