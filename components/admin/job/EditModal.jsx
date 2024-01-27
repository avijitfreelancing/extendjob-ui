const EditModal = () => {
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
              {/* <!-- Login modal --> */}
              <div id="login-modal">
                {/* <!-- Login Form --> */}
                <div className="login-form default-form">
                  <div className="form-inner">
                    <h3>Update Job Category</h3>

                    {/* <!--Login Form--> */}
                    <form method="post">
                      <div className="form-group">
                        <label>Category Title</label>
                        <input type="text" name="title" placeholder="Title" required />
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
                      {/* login */}
                    </form>
                    {/* End form */}
                  </div>
                </div>
                {/* <!--End Login Form --> */}
              </div>
              {/* <!-- End Login Module --> */}
            </div>
            {/* En modal-body */}
          </div>
          {/* End modal-content */}
        </div>
      </div>
      {/* <!-- Login Popup Modal --> */}
    </>
  );
};

export default EditModal;
