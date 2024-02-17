"use client";

import Link from "next/link";
import AdminHeaderContent from "./AdminHeaderContent";
import Image from "next/image";
import { userLogout } from "@/helper/Helper";
import { useEffect, useState } from "react";

const DefaulHeader = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setIsLogin(token ? true : false);
  }, []);

  return (
    <header className="main-header header-style-two fixed-header animated slideInDown">
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

            <AdminHeaderContent />
            {/* <!-- Main Menu End--> */}
          </div>

          <div className="outer-box">
            <div className="btn-box">
              {!isLogin ? (
                <Link
                  href="/login"
                  className="theme-btn btn-style-three call-modal"
                >
                  Login
                </Link>
              ) : (
                <>
                  <Link
                    href="#"
                    className="theme-btn btn-style-three call-modal"
                    onClick={userLogout}
                  >
                    Logout
                  </Link>
                  <Link href="/post-job" className="theme-btn btn-style-one">
                    Job Post
                  </Link>
                  <Link href="/dashboard" className="theme-btn btn-style-one">
                    Candidates Dashboard
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
