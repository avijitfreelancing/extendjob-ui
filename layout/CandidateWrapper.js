import MobileMenu from "@/components/header/MobileMenu"
import DashboardHeader from "@/components/header/DashboardHeader";
import DashboardCandidatesSidebar from "@/components/header/DashboardCandidatesSidebar";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import LoginPopup from "@/components/common/form/login/LoginPopup";
const CandidateWrapper = ({ children }) => {
  return <>
    <div className="page-wrapper dashboard">
      <LoginPopup />
      <DashboardHeader />
      <MobileMenu />
      <DashboardCandidatesSidebar />
      {children}
      <CopyrightFooter />
    </div>
  </>;
};

export default CandidateWrapper;
