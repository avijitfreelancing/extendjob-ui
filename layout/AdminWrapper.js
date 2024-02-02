"use client";

import MobileMenu from "@/components/header/MobileMenu";
import DashboardHeader from "@/components/header/DashboardHeader";
import CopyrightFooter from "@/layout/CopyrightFooter";
import AdminSidebar from "@/components/header/AdminSidebar";

const AdminWrapper = ({ children }) => {
  return (
    <div className="page-wrapper dashboard">
      <DashboardHeader />
      <MobileMenu />
      <AdminSidebar />
      {children}
      <CopyrightFooter />
    </div>
  );
};

export default AdminWrapper;
