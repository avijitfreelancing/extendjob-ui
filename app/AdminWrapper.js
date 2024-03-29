"use client";

import MobileMenu from "@/components/header/MobileMenu";
import CopyrightFooter from "@/layout/CopyrightFooter";
import AdminSidebar from "@/components/header/AdminSidebar";
import AdminHeader from "@/components/header/AdminHeader";

export default function RootLayout({ children }) {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span" />
      <AdminHeader />
      <MobileMenu />
      <AdminSidebar />
      {children}
      <CopyrightFooter />
    </div>
  );
};
