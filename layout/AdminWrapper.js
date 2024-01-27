import MobileMenu from "@/components/header/MobileMenu"
import DashboardHeader from "@/components/header/DashboardHeader";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import DashboardAdminSidebar from "@/components/header/DashboardAdminSidebar";
const EmployerWrapper = ({ children }) => {
  return <>
    <div className="page-wrapper dashboard">
      <LoginPopup />
      <DashboardHeader />
      <MobileMenu />
      <DashboardAdminSidebar />
      {children}
      <CopyrightFooter />
    </div>
  </>;
};

export default EmployerWrapper;
