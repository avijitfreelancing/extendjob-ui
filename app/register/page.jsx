import dynamic from "next/dynamic";
import Header from "./Header";
import MobileMenu from "@/components/header/MobileMenu";
import Register2 from "@/components/common/form/register/Register2";

export const metadata = {
    title: 'Register || Superio - Job Borad React NextJS Template',
    description:
        'Superio - Job Borad React NextJS Template',

}



const index = () => {
    return (
        // <>
        //
        //   <RegisterForm />
        //
        // </>
        <>
            <Header />
            {/* <!--End Main Header -->  */}

            <MobileMenu />
            {/* End MobileMenu */}

            <div className="login-section">
                <div
                    className="image-layer"
                    style={{ backgroundImage: "url(/images/background/12.jpg)" }}
                ></div>
                <div className="outer-box">
                    {/* <!-- Login Form --> */}
                    <div className="login-form default-form">
                        <Register2 />
                    </div>
                    {/* <!--End Login Form --> */}
                </div>
            </div>
            {/* <!-- End Info Section --> */}
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
