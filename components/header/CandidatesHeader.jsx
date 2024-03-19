"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CandidateNavContent from "./CandidateNavContent";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { BUCKET_DOMAIN } from "@/helper/Helper";

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
    window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const isProfileComplete = localStorage.getItem("isProfileComplete");

      if (isProfileComplete === "false") {
        // GO TO PROFILE PAGE
        toast.warning("Please complete your profile first");
        router.push("/my-profile");
        return;
      }

      let userDetails = JSON.parse(localStorage.getItem("userDetails"));
      setUserData({ ...userDetails });
    } else {
      router.push("/login");
    }
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
    <header
      className={`main-header header-shaddow  ${navbar ? "fixed-header " : ""}`}
    >
      <div className="container-fluid">
        <div className="main-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    alt="brand"
                    src="/images/extend_job.png"
                    width={154}
                    height={50}
                    priority
                  />
                </Link>
              </div>
            </div>

            <CandidateNavContent />
          </div>

          <div className="outer-box">
            <button className="menu-btn">
              <span className="count">1</span>
              <span className="icon la la-heart-o"></span>
            </button>

            <button className="menu-btn">
              <span className="icon la la-bell"></span>
            </button>

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
                  src={
                    userData.avatar
                      ? BUCKET_DOMAIN + userData.avatar
                      : "/images/resource/company-6.png"
                  }
                  width={50}
                  height={50}
                />
                <span className="name">
                  {userData.name || userData.username}
                </span>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
