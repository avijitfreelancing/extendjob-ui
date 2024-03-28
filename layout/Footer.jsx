import Image from "next/image";
import footerContent from "@/data/footerContent";
import Link from "next/link";

const Footer = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/extndjob" },
    { id: 2, icon: "fa-twitter", link: "https://twitter.com/ExtendJob" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/extendjob/" },
    { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/extend-job-56b1852b7/" },
    { id: 5, icon: "fa-youtube", link: "https://www.youtube.com/@Extendjob" }
  ];
  return (
    <footer className="main-footer style-five">
      <div className="auto-container">
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      width={154}
                      height={50}
                      src="/images/extend_job.png"
                      alt="brand"
                    />
                  </Link>
                </div>
                <p className="phone-num">
                  <span>Call us </span>
                  <a href="thebeehost@support.com">+966557413295</a>
                </p>
                <p className="address">
                  19652, King Abdul Aziz Road Al Muzahmiya,
                  <br /> Riyadh, KSA <br />
                  <a href="mailto:support@superio.com" className="email">
                  support@extendjob.com
                  </a>
                </p>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                {footerContent.slice(0, 4).map((item) => (
                  <div
                    className="footer-column col-lg-3 col-md-6 col-sm-12"
                    key={item.id}
                  >
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">{item.title}</h4>
                      <div className="widget-content">
                        <ul className="list">
                          {item?.menuList?.map((menu, i) => (
                            <li key={i}>
                              <Link href={menu.route}>{menu.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

          
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
        {/* <!--Widgets Section--> */}
      </div>
      {/* End auto-container */}

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="outer-box">
            <div className="copyright-text">
              © {new Date().getFullYear()} Extendjob by{" "}
              <a
                href="https://devtechmasters.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                devtechmsaters
              </a>
              . All Right Reserved.
            </div>
            <div className="social-links">
              {socialContent.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                >
                  <i className={`fab ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
