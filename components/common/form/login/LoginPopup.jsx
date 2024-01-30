const LoginPopup = () => {
  return (
    <>
      <div className="modal fade" id="loginPopupModal">
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
                <div className="login-form default-form"></div>
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

      <div className="modal fade" id="registerModal">
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
                <div className="login-form default-form"></div>
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

export default LoginPopup;
