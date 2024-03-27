import Partner from "@/components/common/partner/Partner";
import ImgBox from "./ImgBox";
import IntroDescriptions from "./IntroDescriptions";
import Testimonial2 from "@/components/testimonial/Testimonial2";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Funfact from "../fun-fact-counter/Funfact";
import Link from "next/link";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Breadcrumb title="About Us" meta="About Us" />
      {/* <!--End Page Title--> */}

      <section className="about-section-three">
        <div className="auto-container">
          <ImgBox />
          <div className="fun-fact-section">
          <div className="row">
            <Funfact />
          </div>
        </div>
        {/* <!-- Fun Fact Section --> */}
          <IntroDescriptions />
        </div>
      </section>
      {/* <!-- End About Section Three --> */}

        <section
            className="call-to-action-two"
            style={{ backgroundImage: "url(/images/background/1.jpg)" }}
        >
            <div className="auto-container" data-aos="fade-up">
                <div className="sec-title light text-center">
                    <h2>Your Dream Jobs Are Waiting</h2>
                    <div className="text">
                        Over 1 million interactions, 50,000 success stories Make yours now.
                    </div>
                </div>

                <div className="btn-box">
                    <Link href="/job-list" className="theme-btn btn-style-three">
                        Search Job
                    </Link>
                    <Link href="/register" className="theme-btn btn-style-two">
                        Apply Job Now
                    </Link>
                </div>
            </div>
        </section>
      {/* <!-- End CallToAction2 --> */}

      <section className="testimonial-section-two">
        <div className="container-fluid">
          <div className="testimonial-left">
            <Image
              width={504}
              height={451}
              src="/images/resource/testimonial-left.png"
              alt="testimonial"
            />
          </div>
          {/* End left img group */}

          <div className="testimonial-right">
            <Image
              width={504}
              height={451}
              src="/images/resource/testimonial-right.png"
              alt="testimonial"
            />
          </div>
          {/* End right img group */}

          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
            Outstanding service! Highly recommend [ExtendJob]
            </div>
          </div>
          {/* <!-- Sec Title --> */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial2 />
            </div>
            {/* <!-- Testimonial Carousel --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <section className="work-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works?</h2>
            <div className="text">Job for anyone, anywhere</div>
          </div>
          {/* End sec-title */}

          <div className="row" data-aos="fade-up">

          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
