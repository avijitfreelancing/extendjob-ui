"use client"
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import MenuToggler from "@/components/dashboard/MenuToggler";
import UserHeader from "@/components/header/UserHeader";
import MobileMenu from "@/components/header/MobileMenu";
import UserSidebar from "@/components/header/UserSidebar";
import CopyrightFooter from "@/layout/CopyrightFooter";
import {useState} from "react";

const Index = () => {
    const [logImg, setLogoImg] = useState("");
    const logImgHander = (e) => {
        setLogoImg(e.target.files[0]);
    };
  return (
      <div className="page-wrapper dashboard">
        <span className="header-span"></span>
        {/* <!-- Dashboard --> */}
        <UserHeader />
        <MobileMenu />
        <UserSidebar />
          <section className="user-dashboard">
              <div className="dashboard-outer">
                  <BreadCrumb title="My Profile!" />
                  {/* breadCrumb */}

                  <MenuToggler />
                  {/* Collapsible sidebar button */}

                  <div className="row">
                      <div className="col-lg-12">
                          <div className="ls-widget">
                              <div className="tabs-box">
                                  <div className="widget-title">
                                      <h4>My Profile</h4>
                                  </div>
                                  <div className="widget-content">
                                      <div className="uploading-outer">
                                          <div className="uploadButton">
                                              <input
                                                  className="uploadButton-input"
                                                  type="file"
                                                  name="attachments[]"
                                                  accept="image/*"
                                                  id="upload"
                                                  required
                                                  onChange={logImgHander}
                                              />
                                              <label
                                                  className="uploadButton-button ripple-effect"
                                                  htmlFor="upload"
                                              >
                                                  {logImg !== "" ? logImg.name : "Browse Logo"}
                                              </label>
                                              <span className="uploadButton-file-name"></span>
                                          </div>
                                          <div className="text">
                                              Max file size is 1MB, Minimum dimension: 330x300 And
                                              Suitable files are .jpg & .png
                                          </div>
                                      </div>
                                      {/* End logo and cover photo components */}

                                      <form action="#" className="default-form">
                                          <div className="row">
                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Full Name</label>
                                                  <input type="text" name="name" placeholder="Jerome" required />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Job Title</label>
                                                  <input type="text" name="name" placeholder="UI Designer" required />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Phone</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      placeholder="0 123 456 7890"
                                                      required
                                                  />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Email address</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      placeholder="creativelayers"
                                                      required
                                                  />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Website</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      placeholder="www.jerome.com"
                                                      required
                                                  />
                                              </div>


                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Experience</label>
                                                  <input type="text" name="name" placeholder="5-10 Years" required />
                                              </div>


                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Education Levels</label>
                                                  <input type="text" name="name" placeholder="Certificate" required />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Languages</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      placeholder="English, Turkish"
                                                      required
                                                  />
                                              </div>

                                              {/* <!-- Search Select --> */}

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Allow In Search & Listing</label>
                                                  <select className="chosen-single form-select" required>
                                                      <option>Yes</option>
                                                      <option>No</option>
                                                  </select>
                                              </div>

                                              {/* <!-- About Company --> */}
                                              <div className="form-group col-lg-12 col-md-12">
                                                  <label>Description</label>
                                                  <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <button type="submit" className="theme-btn btn-style-one">
                                                      Save
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                      {/* compnay info box */}
                                  </div>
                              </div>
                          </div>
                          {/* <!-- Ls widget --> */}

                          <div className="ls-widget">
                              <div className="tabs-box">
                                  <div className="widget-title">
                                      <h4>Social Network</h4>
                                  </div>
                                  {/* End widget-title */}

                                  <div className="widget-content">
                                      <form className="default-form">
                                          <div className="row">
                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Facebook</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      placeholder="www.facebook.com/Invision"
                                                      required
                                                  />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Twitter</label>
                                                  <input type="text" name="name" placeholder="" required />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Linkedin</label>
                                                  <input type="text" name="name" placeholder="" required />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Google Plus</label>
                                                  <input type="text" name="name" placeholder="" required />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <button type="submit" className="theme-btn btn-style-one">
                                                      Save
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- Ls widget --> */}

                          <div className="ls-widget">
                              <div className="tabs-box">
                                  <div className="widget-title">
                                      <h4>Contact Information</h4>
                                  </div>
                                  {/* End widget-title */}
                                  <div className="widget-content">
                                      <form className="default-form">
                                          <div className="row">
                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Country</label>
                                                  <select className="chosen-single form-select" required>
                                                      <option>Australia</option>
                                                      <option>Pakistan</option>
                                                      <option>Chaina</option>
                                                      <option>Japan</option>
                                                      <option>India</option>
                                                  </select>
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>City</label>
                                                  <select className="chosen-single form-select" required>
                                                      <option>Melbourne</option>
                                                      <option>Pakistan</option>
                                                      <option>Chaina</option>
                                                      <option>Japan</option>
                                                      <option>India</option>
                                                  </select>
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-12 col-md-12">
                                                  <label>Complete Address</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
                                                      required
                                                  />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-6 col-md-12">
                                                  <label>Find On Map</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
                                                      required
                                                  />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-3 col-md-12">
                                                  <label>Latitude</label>
                                                  <input type="text" name="name" placeholder="Melbourne" required />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-3 col-md-12">
                                                  <label>Longitude</label>
                                                  <input type="text" name="name" placeholder="Melbourne" required />
                                              </div>

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-12 col-md-12">
                                                  <button className="theme-btn btn-style-three">Search Location</button>
                                              </div>
                                              {/* End MapBox */}

                                              {/* <!-- Input --> */}
                                              <div className="form-group col-lg-12 col-md-12">
                                                  <button type="submit" className="theme-btn btn-style-one">
                                                      Save
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- Ls widget --> */}
                      </div>
                  </div>
                  {/* End .row */}
              </div>
              {/* End dashboard-outer */}
          </section>
        {/* <!-- End Dashboard --> */}
        <CopyrightFooter />
        {/* <!-- End Copyright --> */}
      </div>
    // End page-wrapper
  );
};

export default Index;
