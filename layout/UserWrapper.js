import MobileMenu from "@/components/header/MobileMenu"
import DashboardHeader from "@/components/header/DashboardHeader";
import UserSidebar from "@/components/header/DashboardUserSidebar";
import CopyrightFooter from "@/layout/CopyrightFooter";
const UserWrapper = ({ children }) => {
  return <>
    <div className="page-wrapper dashboard">
      <DashboardHeader />
      <MobileMenu />
      <UserSidebar />
      {children}
      <CopyrightFooter />
    </div>
  </>;
};

export default UserWrapper;
