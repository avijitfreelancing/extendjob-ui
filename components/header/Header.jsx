
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {toast} from "react-toastify";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const headerStyle = currentPath === "/" ? "header-style-two alternate" : "header-style-three"

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
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

  return (
      // <!-- Main Header-->
      <header
          className={`main-header ${headerStyle}  ${
              navbar ? "fixed-header animated slideInDown" : ""
          }`}
      >
        <div className="auto-container">
          {/* <!-- Main box --> */}
          <div className="main-box">
            {/* <!--Nav Outer --> */}
            <div className="nav-outer">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <Image
                        width={154}
                        height={50}
                        src="/images/logo-2.svg"
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

export default Header;
