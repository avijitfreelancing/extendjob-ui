import Header from "@/layout/Header";
import Footer from "@/layout/Footer"
import MobileMenu from "@/components/header/MobileMenu"
import Header2 from "@/components/header/DefaulHeader2"
import Header1 from "@/components/header/DefaulHeader"
const Wrapper = ({ children }) => {
  return <>
    {/*<Header/>*/}
    {/*<Header2/>*/}
    <Header1/>
    <MobileMenu/>
    {children}
    <Footer/>
  </>;
};

export default Wrapper;
