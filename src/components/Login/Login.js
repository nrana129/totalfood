import React from 'react'
import {login_banner} from "../../assets/images/index"

const Login = () => {
  return (

    <div className="login_popUp">
    <img src={login_banner} alt="" />
      <div id="loginfrom" autocomplete="off">
        <div className="sign_header">
          <h2>Sign In/Sign Up</h2>
        </div>
        <div className="form-group">
          <div className="mbnumber_box">
            <span>+91</span>
            <input
              type="tel"
              className="form-control"
              maxlength="10"
              id="mobilenumber"
              autocomplete="false"
            />
            <input
              type="hidden"
              id="url"
              name=""
              value="https://totalfood.greenhonchos.in/"
            />
          </div>
          <p id="moerror" className="error"></p>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="loginfrombtn"
        >
          Continue with SMS OTP
        </button>

        <div className="footer_line">
          <p>
            By continuing I agree to receive SMS, WhatsApp &amp;
            RCS communication. Send me the order status &amp;
            exclusive offers on WhatsApp, SMS &amp; RCS.
          </p>
          <div>
            <span>100% safe &amp; secure</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login