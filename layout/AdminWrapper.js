"use client";

import MobileMenu from "@/components/header/MobileMenu";
import DashboardHeader from "@/components/header/DashboardHeader";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import DashboardAdminSidebar from "@/components/header/DashboardAdminSidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const EmployerWrapper = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let userDetails = JSON.parse(localStorage.getItem("userDetails"));
      if (!userDetails.isAdmin) {
        router.push("/admin");
      }
    } else {
      router.push("/admin");
    }
  }, []);

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
