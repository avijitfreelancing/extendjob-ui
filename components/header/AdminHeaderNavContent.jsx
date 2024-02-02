"use client";

import Link from "next/link";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            className={`${
              isActiveParent(homeItems, usePathname()) ? "current" : ""
            } `}
          >
            <Link href="/">Home</Link>
          </li>
          {/* End homepage menu items */}

          <li
            className={`${
              isActiveParent(findJobItems, usePathname()) ? "current" : ""
            } `}
            id="has-mega-menu"
          >
            <Link href="/jobs">Jobs</Link>
           
          </li>
          <li
            className={`${
              isActiveParent(findJobItems, usePathname()) ? "current" : ""
            } `}
            id="has-mega-menu"
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li
            className={`${
              isActiveParent(findJobItems, usePathname()) ? "current" : ""
            } `}
            id="has-mega-menu"
          >
            <Link href="/faq">FAQ's</Link>
          </li>
          {/* End findjobs menu items */}
          <li
            className={`${
              isActiveParentChaild(pageItems, usePathname()) 

                ? "current "
                : ""
            } dropdown`}
          >
            <span>Pages</span>
            <ul>
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
