"use client";

import Link from "next/link";
import AdminHeaderContent from "./AdminHeaderContent";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DefaulHeader = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setIsLogin(token ? true : false);
    token = localStorage.getItem("admin_token");
    setIsAdmin(token ? true : false);
  }, []);

  const logout = () => {
    const aa = toast.loading("Please Wait");

    setTimeout(() => {
      localStorage.clear();
      router.push("/login");
      toast.done(aa);
    }, 1500);
  };

  const adminlogout = () => {
    const aa = toast.loading("Please Wait");

    setTimeout(() => {
      localStorage.clear();
      router.push("/admin");
      toast.done(aa);
    }, 1500);
  };
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
        className={`main-header  ${
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

            <AdminHeaderContent />
            {/* <!-- Main Menu End--> */}
          </div>

          {isAdmin ? (
            <div className="outer-box">
              <div className="btn-box">
                <Link
                  href="#"
                  className="theme-btn btn-style-three call-modal"
                  onClick={adminlogout}
                >
                  Logout
                </Link>

                <Link
                  href="/admin/dashboard"
                  className="theme-btn btn-style-one"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          ) : (
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
                      onClick={logout}
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
          )}
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
