import Footer from "@/layout/Footer"
import MobileMenu from "@/components/header/MobileMenu"
import Header from "@/components/header/DefaulHeader"
import LoginPopup from "@/components/common/form/login/LoginPopup";
const Wrapper = ({ children }) => {
  return <>
    <LoginPopup />
    <Header/>
    <MobileMenu/>
    {children}
    <Footer/>
  </>;
};

export default Wrapper;
