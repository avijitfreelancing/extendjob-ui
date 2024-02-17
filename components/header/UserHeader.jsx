"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserHeaderContent from "./UserHeaderContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UserHeader = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [userData, setUserData] = useState({});

  const DropDownData = [
    {
      id: 1,
      name: "Dashboard",
      icon: "la-home",
      routePath: "/dashboard",
      active: "active",
    },
    {
      id: 2,
      name: "My Profile",
      icon: "la-user-tie",
      routePath: "/my-profile",
      active: "",
    },
    {
      id: 10,
      name: "Change Password",
      icon: "la-lock",
      routePath: "/change-password",
      active: "",
    },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let userDetails = JSON.parse(localStorage.getItem("userDetails"));
      setUserData({ ...userDetails });
    } else {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const logout = () => {
    const aa = toast.loading("Please Wait");

    setTimeout(() => {
      localStorage.clear();
      router.push("/login");
      toast.done(aa);
    }, 1500);
  };

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-shaddow  ${navbar ? "fixed-header " : ""}`}
    >
      <div className="container-fluid">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    alt="brand"
                    src="/images/logo-2.png"
                    width={154}
                    height={50}
                    priority
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <UserHeaderContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <button className="menu-btn">
              <span className="count">1</span>
              <span className="icon la la-heart-o"></span>
            </button>
            {/* wishlisted menu */}

            <button className="menu-btn">
              <span className="icon la la-bell"></span>
            </button>
            {/* End notification-icon */}

            {/* <!-- Dashboard Option --> */}
            <div className="dropdown dashboard-option">
              <a
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image
                  alt="avatar"
                  className="thumb"
                  src="/images/resource/company-6.png"
                  width={50}
                  height={50}
                />
                <span className="name">{userData.username}</span>
              </a>

              <ul className="dropdown-menu">
                {DropDownData.map((item, key) => (
                  <li
                    className={`${
                      isActiveLink(item.routePath, usePathname())
                        ? "active"
                        : ""
                    } mb-1`}
                    key={key}
                  >
                    <Link href={item.routePath}>
                      <i className={`la ${item.icon}`} /> {item.name}
                    </Link>
                  </li>
                ))}
                <li className="mb-1">
                  <Link href="#" onClick={logout}>
                    <i className="la la-sign-out" /> Logout
                  </Link>
                </li>
              </ul>
            </div>
            {/* End dropdown */}
          </div>
          {/* End outer-box */}
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
