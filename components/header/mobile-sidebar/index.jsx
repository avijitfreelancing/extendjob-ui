"use client";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import React from 'react';
import mobileMenuData from "@/data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "@/utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";


const Index = () => {

  const router = useRouter()


  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}
        <Sidebar>
          <Menu>
            {mobileMenuData.map((item) => (
                <React.Fragment key={item.id}>
                  {item.items ? (
                      <SubMenu
                          className={
                            isActiveParentChaild(item.items, usePathname())
                                ? "menu-active"
                                : ""
                          }
                          label={item.label}
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
                              {menuItem.name}
                            </MenuItem>
                        ))}
                      </SubMenu>
                  ) : (
                      <MenuItem
                          onClick={() => router.push(item.routePath)}
                          className={
                            isActiveLink(item.routePath, usePathname())
                                ? "menu-active-link"
                                : ""
                          }
                      >
                        {item.label}
                      </MenuItem>
                  )}
                </React.Fragment>
            ))}
          </Menu>
        </Sidebar>
      <SidebarFooter />
    </div>
  );
};

export default Index;