'use client'
import Select from "react-select";

const EditModal = () => {
  const subcategory = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
  ];
  return (
    <>
      <div className="modal fade" id="editPopupModal">
        <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>
            {/* End close modal btn */}

            <div className="modal-body">
              {/* <!-- Login.jsx modal --> */}
              <div id="login-modal">
                {/* <!-- Login.jsx Form --> */}
                <div className="login-form">
                  <div className="form-inner">
                    <h3>Update Category</h3>

                    {/* <!--Login.jsx Form--> */}
                    <form method="post" className="default-form">
                      <div className="row">
                        <div className="form-group">
                          <label>Category Title</label>
                          <input type="text" name="title" placeholder="Title" required />
                        </div>
                        <div className="form-group col-lg-12 col-md-12">
                          <label>Sub Categories List </label>
                          <Select
                              defaultValue={[subcategory[2]]}
                              isMulti
                              name="colors"
                              options={subcategory}
                              className="basic-multi-select"
                              classNamePrefix="select"
                          />
                        </div>
                        <div className="form-group col-lg-9 col-md-12">
                          <label> Sub Category Title</label>
                          <input type="text" name="sub_title" placeholder="Title" required />
                        </div>
                        <div className="form-group col-lg-3 col-md-12">
                          <label> ADD</label>
                          <div className="btn-box">
                            <button
                                className="theme-btn btn-style-three"
                            >
                              <span className="la la-plus"></span>
                            </button>
                          </div>
                        </div>
                        {/* name */}
                        {/* forgot password */}
                        <div className="form-group">
                          <button
                              className="theme-btn btn-style-one"
                              type="submit"
                              name="log-in"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                      {/* login */}
                    </form>
                    {/* End form */}
                  </div>
                </div>
                {/* <!--End Login.jsx Form --> */}
              </div>
              {/* <!-- End Login.jsx Module --> */}
            </div>
            {/* En modal-body */}
          </div>
          {/* End modal-content */}
        </div>
      </div>
      {/* <!-- Login.jsx Popup Modal --> */}
    </>
  );
};

export default EditModal;
