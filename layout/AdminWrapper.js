"use client";

import MobileMenu from "@/components/header/MobileMenu";
import UserHeader from "@/components/header/UserHeader";
import CopyrightFooter from "@/layout/CopyrightFooter";
import AdminSidebar from "@/components/header/AdminSidebar";

const AdminWrapper = ({ children }) => {
  return (
    <div className="page-wrapper dashboard">
      <UserHeader />
      <MobileMenu />
      <AdminSidebar />
      {children}
      <CopyrightFooter />
    </div>
  );
};

export default AdminWrapper;
