import Link from "next/link";
import LoginPopup from "../common/form/login/LoginPopup";
import Partner from "../common/partner/Partner";
import MobileMenu from "../header/MobileMenu";
import Hero4 from "../hero/hero-4";
import JobCategorie1 from "../job-categories/JobCategorie1";
import RegBanner2 from "../block/RegBanner2";
import JobFeatured10 from "../job-featured/JobFeatured10";
import Header from "./Header"
import Footer from "./Footer"


const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero4 />
      {/* End Hero Section */}
      <section className="registeration-banners">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <RegBanner2 />
          </div>
        </div>
      </section>
      {/* <!-- End Registeration Banners --> */}

      <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center mb-0">
            <h2>Jobs of the day</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End sec-title */}
          <JobFeatured10 />
        </div>
      </section>
      {/* End Job Featured Section */}


      {/* <!-- End Testimonial Section --> */}
      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
