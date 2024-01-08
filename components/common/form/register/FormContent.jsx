import validation from "@/helper/validation";

const FormContent = ({ userData, setUserData, errors, setErrors }) => {
  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });

    const valid_obj = {
      value,
      rules: e.target.getAttribute("validaterule"),
      message: e.target.getAttribute("validatemsg"),
    };

    validation(valid_obj).then((err) => {
      setErrors({ ...errors, [name]: err });
    });
  };

  return (
    <form>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          validaterule={["required", "isEmail"]}
          validatemsg={[
            "Email address is required",
            "Enter a valid email address",
          ]}
          value={userData.email}
          onChange={handleOnChange}
          required
        />
        <p className="invalid_input">{errors.email}</p>
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="button">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
