import SearchForm from "@/components/hero/SearchForm";
import PopularSearch from "@/components/hero/PopularSearch";
import Counter from "@/components/hero/Counter";

const index = () => {
  return (
    <section
      className="banner-section-nine"
      style={{ backgroundImage: "url(/images/background/2.png)" }}
    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="500" data-aos="fade-up">
            <h3>The Easiest Way to Get Your New Job</h3>
          </div>

          {/* <!-- Job Search Form --> */}
          <div
            className="job-search-form"
            data-aos-delay="700"
            data-aos="fade-up"
          >
            <SearchForm btnStyle="btn-style-two" />
          </div>
        </div>
        {/* <!-- Job Search Form --> */}

        {/* <!-- Popular Search --> */}
        <PopularSearch />
        {/* <!-- End Popular Search --> */}
        <div className="fun-fact-section">
          <div className="row">
            <Counter />
          </div>
        </div>
        {/* <!-- Fun Fact Section --> */}
      </div>
    </section>
  );
};

export default index;
