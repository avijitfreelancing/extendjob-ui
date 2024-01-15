import FormContent2 from "../../common/form/login/FormContent2";
import MobileMenu from "../../header/MobileMenu";
import Header from "./Header";

const index = () => {
    const bgImg = {
        backgroundImage: "url(/images/background/12.jpg)"
    }
  return (
    <>
      {/*<Header />*/}
      {/* <!--End Main Header -->  */}

      {/*<MobileMenu />*/}
      {/* End MobileMenu */}

      <div className="login-section">
        <div
          className="image-layer"
          style={ bgImg }
        ></div>
        <div className="outer-box">
          {/* <!-- Login Form --> */}
          <div className="login-form default-form">
            <FormContent2 />
          </div>
          {/* <!--End Login Form --> */}
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default index;
