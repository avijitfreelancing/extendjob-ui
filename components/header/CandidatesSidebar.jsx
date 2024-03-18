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

const CandidatesSidebar = () => {
  const { menu } = useSelector((state) => state.toggle);
  const [userDetails, setUserDetails] = useState({});
  const dispatch = useDispatch();
  // menu togggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");

    if (userDetails) {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>

      <div className="sidebar-inner">
        <div className="skills-percentage">
          <div
            className={"dashboard-option"}
            style={{ width: 50, height: 70, margin: "auto" }}
          >
            <Image
              alt="avatar"
              className="thumb"
              src="/images/resource/candidate-1.png"
              width={500}
              height={500}
            />
          </div>
          <h4>{userDetails.name || userDetails.username}</h4>
          <h4>Balance: 0.00</h4>
        </div>
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
