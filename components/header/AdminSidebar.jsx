"use client";

import Link from "next/link";
import AdminMenuData from "@/data/AdminMenuData";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "@/features/toggle/toggleSlice";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {useState} from "react";

const AdminSidebar = () => {
    const { menu } = useSelector((state) => state.toggle);
    const dispatch = useDispatch();
    const [activeMenu, setActiveMenu] = useState(null);

    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };

    const handleMenuClick = (id) => {
        if (activeMenu === id) {
            setActiveMenu(null);
        } else {
            setActiveMenu(id);
        }
    };

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}
        <div className="auto-container mt-3">
            <div className="candidate-block-six">
                <div className="inner-box">
                    <figure className="image">
                        <Image
                            width={100}
                            height={100}
                            src="/images/resource/candidate-1.png"
                            alt="avatar"
                        />
                    </figure>
                    <h4 className="name">name</h4>
                    <span className="designation"><span className="icon flaticon-money"></span> $
                                0.00</span>
                </div>
            </div>
        </div>
      <div className="sidebar-inner">
        <ul className="navigation">
            {AdminMenuData.map((item) => (
                <li
                    key={item.id}
                    className={`${
                        isActiveLink(item.routePath, usePathname())
                            ? "active"
                            : ""
                    } mb-1`}
                    onClick={() => handleMenuClick(item.id)}
                >
              <span className="menu-item">
                <i className={`la ${item.icon}`}></i> {item.name}
              </span>
                    {item.subMenus && activeMenu === item.id && (
                        <ul className="sub-menu">
                            {item.subMenus.map((subItem) => (
                                <li key={subItem.id}>
                                    <Link href={subItem.routePath}>
                                        <span>{subItem.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
          {/*{AdminMenuData.map((item) => (*/}
          {/*  <li*/}
          {/*    className={`${*/}
          {/*      isActiveLink(item.routePath, usePathname()) ? "active" : ""*/}
          {/*    } mb-1`}*/}
          {/*    key={item.id}*/}
          {/*    onClick={menuToggleHandler}*/}
          {/*  >*/}
          {/*    <Link href={item.routePath}>*/}
          {/*      <i className={`la ${item.icon}`}></i> {item.name}*/}
          {/*    </Link>*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
