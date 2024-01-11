import MobileMenu from "@/components/header/MobileMenu"
import DashboardHeader from "@/components/header/DashboardHeader";
import DashboardEmployerSidebar from "@/components/header/DashboardEmployerSidebar";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import LoginPopup from "@/components/common/form/login/LoginPopup";
const EmployerWrapper = ({ children }) => {
  return <>
    <div className="page-wrapper dashboard">
      <LoginPopup />
      <DashboardHeader />
      <MobileMenu />
      <DashboardEmployerSidebar />
      {children}
      <CopyrightFooter />
    </div>
  </>;
};

export default EmployerWrapper;