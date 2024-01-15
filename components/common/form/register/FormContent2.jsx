const FormContent2 = () => {
  return (
    <form>
        <div className="row">
            <div className="form-group col-lg-6 col-md-12">
                <label>User Name</label><span className="text-danger">*</span>
                <input type="text" name="username" placeholder="Username" required />
            </div>
            <div className="form-group col-lg-6 col-md-12">
                <label>Email Address</label><span className="text-danger">*</span>
                <input type="email" name="username" placeholder="Username" required />
            </div>
            <div className="form-group col-lg-6 col-md-12">
                <label>Country</label><span className="text-danger">*</span>
                <select className="chosen-single form-select" required>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>USA</option>
                </select>
            </div>
            {/* <!-- Input --> */}
            <div className="form-group col-lg-6 col-md-12">
                <label>Mobile</label><span className="text-danger">*</span>
                <input type="text" name="phone" placeholder="" required />
            </div>
          {/* name */}
            <div className="form-group col-lg-6 col-md-12">
                <label>Password</label><span className="text-danger">*</span>
                <input
                    id="password-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </div>
            <div className="form-group col-lg-6 col-md-12">
                <label>Confirm Password</label><span className="text-danger">*</span>
                <input
                    id="password-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </div>
          {/* password */}

          <div className="form-group">
            <button className="theme-btn btn-style-one" type="submit">
              Register
            </button>
          </div>
        </div>
      {/* login */}
    </form>
  );
};

export default FormContent2;
