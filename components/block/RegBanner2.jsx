import Image from "next/image";
import Link from "next/link";

const RegBanner2 = () => {
  const regBannerContent = [
    {
      id: 1,
      name: "Employers",
      text: ` Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt. Labore et dolore nostrud exercitation.`,
      avatar: "/images/resource/image-3.png",
      bannerClass: "banner-style-one",
      width: "300",
      height: "600",
      linkTitle: "Post a Job",
      link: "/post-job",
    },
    {
      id: 2,
      name: "Job Seekers",
      text: ` Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt. Labore et dolore nostrud exercitation.`,
      avatar: "/images/resource/banner-img-3.png",
      bannerClass: "banner-style-two",
      width: "350",
      height: "600",
      linkTitle: "Find a Job",
      link: "/jobs",
    },
  ];
  return (
    <>
      {regBannerContent.map((item) => (
        <div
          className={`${item.bannerClass} -type-2 col-lg-6 col-md-12 col-sm-12`}
          key={item.id}
        >
          <div className="inner-box">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h2>
                  Get applications from the <br />
                  world best talents.
                </h2>
                <div className="text">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 600,000
                  companies worldwide.
                </div>
              </div>
              <ul className="list-style-one">
                <li>Bring to the table win-win survival</li>
                <li>Capitalize on low hanging fruit to identify</li>
                <li>But I must explain to you how all this</li>
              </ul>
              <Link href={item.link} className="theme-btn btn-style-one">
                {item.linkTitle}
              </Link>
            </div>
            <figure className="image">
              <Image
                width={item.width}
                height={item.height}
                src={item.avatar}
                alt="resource"
              />
            </figure>
          </div>
        </div>
      ))}
    </>
  );
};

export default RegBanner2;
