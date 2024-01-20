"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // Check if the current page is the home page
  const isHomePage = window.location.pathname === "/";
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <header
      className={`main-header ${isHomePage ? "header-style-two" : ""}  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      <div className="auto-container">
        <div className="main-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={154}
                    height={50}
                    src="/images/logo-2.png"
                    alt="brand"
                  />
                </Link>
              </div>
            </div>

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>

          <div className="outer-box">
            <div className="btn-box">
              <Link
                href="/login"
                className="theme-btn btn-style-three call-modal"
              >
                Login
              </Link>
              <Link
                href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-one"
              >
                Job Post
              </Link>
            </div>
            <div className="btn-box">
              <Link
                href="/candidates-dashboard/dashboard"
                className="theme-btn btn-style-one"
              >
                Candidates Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
