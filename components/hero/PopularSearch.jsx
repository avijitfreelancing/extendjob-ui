const PopularSearch = () => {
    const linkStyle = { color: 'white' }; // Define the style object
  return (
    <div className="popular-searches" style={linkStyle} data-aos="fade-up" data-aos-delay="1000">
      <span className="title text-color" style={linkStyle}>Popular Searches : </span>
      <a style={linkStyle} href="#">Designer</a>, <a style={linkStyle} href="#">Developer</a>, <a style={linkStyle} href="#">Web</a>,
      <a style={linkStyle} href="#"> IOS</a>, <a style={linkStyle} href="#">PHP</a>, <a style={linkStyle} href="#">Senior</a>,
      <a style={linkStyle} href="#"> Engineer</a>,
    </div>
  );
};

export default PopularSearch;
