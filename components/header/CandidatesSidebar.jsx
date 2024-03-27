"use client";

import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";
import candidatesuData from "@/data/candidateMenuData";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "@/features/toggle/toggleSlice";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BUCKET_DOMAIN } from "@/helper/Helper";
import { getWalletBalance } from "@/reducers/WalletSlice";
import { toast } from "react-toastify";

const CandidatesSidebar = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.toggle);
  const { walletDetails } = useSelector((state) => state.wallet);
  const [userDetails, setUserDetails] = useState({});
  const [walletBalance, setWalletBalance] = useState(0);

  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");

    if (userDetails) {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  useEffect(() => {
    dispatch(getWalletBalance());
  }, [dispatch]);

  useEffect(() => {
    if (!walletDetails.success) {
      toast.error(walletDetails.message);
      return;
    }
    const { balance } = walletDetails.wallet;
    setWalletBalance(balance);
  }, [walletDetails]);

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close" />
        </div>
      </div>
      <div className="auto-container mt-3">
        <div className="candidate-block-six">
          <div className="inner-box">
            <figure className="image">
              <Image
                width={100}
                height={100}
                src={
                  userDetails.avatar
                    ? BUCKET_DOMAIN + userDetails.avatar
                    : "/images/resource/candidate-1.png"
                }
                alt="avatar"
              />
            </figure>
            <h4 className="name">{userDetails.name || userDetails.username}</h4>
            <span className="designation">
              <span className="icon flaticon-money" />${walletBalance}
            </span>
          </div>
        </div>
      </div>
      <div className="sidebar-inner">
        <ul className="navigation">
          {candidatesuData.map((item) => (
            <li
              className={`${
                isActiveLink(item.routePath, usePathname()) ? "active" : ""
              } mb-1`}
              key={item.id}
              onClick={menuToggleHandler}
            >
              <Link href={item.routePath}>
                <i className={`la ${item.icon}`}></i> {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CandidatesSidebar;
