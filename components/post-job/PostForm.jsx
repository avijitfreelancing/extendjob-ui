
'use client'

import Select from "react-select";
import {useState} from "react";

const PostForm = () => {
  const [logoImg, setLogoImg] = useState("");

  // logo image
  const logoHandler = (file) => {
    setLogoImg(file);
  };
  const specialisms = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form className="default-form">
      <div className="row">
        <div className="form-group col-lg-12 col-md-12">
          <div className="widget-title">
            <h4>Job Banner</h4>
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
                    onChange={(e) => logoHandler(e.target.files[0])}
                />
                <label
                    className="uploadButton-button ripple-effect"
                    htmlFor="upload"
                >
                  {logoImg !== "" ? logoImg?.name : " Browse Logo"}
                </label>
                <span className="uploadButton-file-name"></span>
              </div>
              <div className="text">
                banner show here
              </div>
            </div>
            {/* End logo and cover photo components */}
          </div>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Category </label>
          <Select
              defaultValue={[specialisms[2]]}
              isMulti
              name="colors"
              options={specialisms}
              className="basic-multi-select"
              classNamePrefix="select"
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Subcategory </label>
          <Select
              defaultValue={[specialisms[2]]}
              isMulti
              name="colors"
              options={specialisms}
              className="basic-multi-select"
              classNamePrefix="select"
          />
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <input type="text" name="name" placeholder="Title" />
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Quantity (Minimum 5 Jobs )</label><span className="text-danger">*</span>
          <input type="number" name="qty" placeholder="" />
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Worker will earn ( Minimum Job Price = 0.02 )</label><span className="text-danger">*</span>
          <input type="number" name="price" placeholder="" /><span>USD</span>
        </div>
        <div className="form-group col-lg-8 col-md-12">
          <label>Job Prof </label><span className="text-danger">*</span>
          <select className="chosen-single form-select" required>
            <option>Optional</option>
            <option>Required</option>
          </select>
        </div>
        <div className="form-group col-lg-4 col-md-12">
          <label>Total Budget</label>
          <input type="text" readOnly name="price" placeholder="0.00" />
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Description</label><span className="text-danger">*</span>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-one">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
