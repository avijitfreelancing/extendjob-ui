import Footer from "@/layout/Footer"
import MobileMenu from "@/components/header/MobileMenu"
import Header from "@/components/header/DefaulHeader"
const Wrapper = ({ children }) => {
  return <>
    <Header/>
    <MobileMenu/>
    {children}
    <Footer/>
  </>;
};

export default Wrapper;
