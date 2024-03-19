"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AdminHeader = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [userData, setUserData] = useState({});

  const changeBackground = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("admin_token");
    if (token) {
      let userDetails = JSON.parse(localStorage.getItem("adminDetails"));
      setUserData({ ...userDetails });
    } else {
      router.push("/admin");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const DropDownData = [
    {
      id: 1,
      name: "Dashboard",
      icon: "la-home",
      routePath: "/admin/dashboard",
      active: "active",
    },
    {
      id: 10,
      name: "Change Password",
      icon: "la-lock",
      routePath: "/admin/change-password",
      active: "",
    },
  ];

  const logout = () => {
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
                    src="/images/logo-2.png"
                    width={154}
                    height={50}
                    priority
                  />
                </Link>
              </div>
            </div>

            <Link
                href="/"
                className="theme-btn btn-style-one"
                target={"_blank"}
            >
              Visit website
            </Link>
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
                  src="/images/resource/company-6.png"
                  width={50}
                  height={50}
                />
                <span className="name">{userData.name || "Admin"}</span>
              </a>

              <ul className="dropdown-menu">
                {DropDownData.map((item) => (
                  <li
                    className={`${
                      isActiveLink(item.routePath, usePathname())
                        ? "active"
                        : ""
                    } mb-1`}
                    key={item.id}
                  >
                    <Link href={item.routePath}>
                      <i className={`la ${item.icon}`}></i> {item.name}
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

export default AdminHeader;
