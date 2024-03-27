"use client";

import Link from "next/link";
import { UserLists } from "@/data/AdminMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "@/utils/linkActiveChecker";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "@/features/toggle/toggleSlice";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const AdminSidebar = () => {
  const router = useRouter();

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
      <div className="auto-container mt-5">
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
            <span className="designation">
              <span className="icon flaticon-money"></span>
              $0.00
            </span>
          </div>
        </div>
      </div>
      <div className="sidebar-inner">
        <Sidebar>
          <Menu>
            {UserLists.map((item) => (
              <React.Fragment key={item.id}>
                {item.items ? (
                  <SubMenu
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "menu-active-link"
                        : ""
                    }
                    label={item.name}
                  >
                    {item.items.map((menuItem, i) => (
                      <MenuItem
                        key={i}
                        onClick={() => router.push(menuItem.routePath)}
                        className={
                          isActiveLink(menuItem.routePath, usePathname())
                            ? "menu-active-link"
                            : ""
                        }
                      >
                        <Link href={menuItem.routePath}>
                          <i className={`la ${menuItem.icon}`}></i>{" "}
                          {menuItem.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    onClick={menuToggleHandler}
                    className={`${
                      isActiveLink(item.routePath, usePathname())
                        ? "menu-active-link"
                        : ""
                    } mb-1`}
                    key={item.id}
                  >
                    <Link href={item.routePath}>
                      <i className={`la ${item.icon}`}></i> {item.name}
                    </Link>
                  </MenuItem>
                )}
              </React.Fragment>
            ))}
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default AdminSidebar;
