import MobileMenu from "@/components/header/MobileMenu";
import UserHeader from "@/components/header/UserHeader";
import UserSidebar from "@/components/header/UserSidebar";
import CopyrightFooter from "@/layout/CopyrightFooter";
const UserWrapper = ({ children }) => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span" />
      <UserHeader />
      <MobileMenu />
      <UserSidebar />
      {children}
      <CopyrightFooter />
    </div>
  );
};

export default UserWrapper;
