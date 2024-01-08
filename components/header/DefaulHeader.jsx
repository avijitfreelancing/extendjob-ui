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
  // const isHomePage = window.location.pathname === "/";
  const isHomePage = true;
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    // <!-- Main Header-->
    <header
      className={`main-header ${isHomePage ? "header-style-two" : ""}  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="auto-container">
        <div className="main-box">
          {/* <!--Nav Outer --> */}
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
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            {/* <!-- Login/Register --> */}
            <div className="btn-box">
              <a
                href="#"
                className="theme-btn btn-style-three call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                Login / Register
              </a>
              <Link
                href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-one"
              >
                Job Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
