"use client";

import MobileMenu from "@/components/header/MobileMenu";
import DashboardHeader from "@/components/header/DashboardHeader";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import DashboardAdminSidebar from "@/components/header/DashboardAdminSidebar";

const EmployerWrapper = ({ children }) => {
  return (
    <div className="page-wrapper dashboard">
      <DashboardHeader />
      <MobileMenu />
      <DashboardAdminSidebar />
      {children}
      <CopyrightFooter />
    </div>
  );
};

export default EmployerWrapper;
