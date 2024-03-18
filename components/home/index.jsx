import Partner from "../common/partner/Partner";
import Hero from "../hero/index";
import JobCategorie1 from "../job-categories/JobCategorie1";
import RegBanner2 from "../block/RegBanner2";
import JobFeatured10 from "../job-featured/JobFeatured10";
import Header from "@/components/header/Header";
import MobileMenu from "@/components/header/MobileMenu";

const index = () => {
  return (
    <>
      <Hero />
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
    </>
  );
};

export default index;
