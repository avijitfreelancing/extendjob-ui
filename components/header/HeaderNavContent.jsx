"use client";

import Link from "next/link";
import {pageItems,} from "@/data/MenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "@/utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  const currentPath = usePathname();
  return (
      <>
        <nav className="nav main-menu">
          <ul className="navigation" id="navbar">
            {/* current dropdown */}

            <li className={currentPath === "/" ? "current" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={currentPath === "/jobs" ? "current" : ""}>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li className={currentPath === "/contact" ? "current" : ""}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={currentPath === "/faq" ? "current" : ""}>
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
          </ul>
        </nav>
      </>
  );
};

export default HeaderNavContent;