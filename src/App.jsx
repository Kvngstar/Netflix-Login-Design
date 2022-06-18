import React from "react";
import { useState } from "react";
import "../src/App.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });
     console.log([formInput.username, formInput.password]);
  function onFormChange(event) {
    setFormInput((prev) => { return ({ ...prev, [event.target.name]: event.target.value }) })
  
  }
  function formSubmit(event) {
     event.preventDefault();
   }

  return (
    <div className="wrapper">
      <div className="header">NETFLIX</div>
      <div className="body">
        <div>
          <header>Sign In</header>
          <form
            action="
        "
            onSubmit={formSubmit}
          >
            <>
              <FloatingLabel
                controlId=""
                label="Email or Phone number"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  size="sm"
                  onChange={onFormChange}
                  value={formInput.email}
                  name="username"
                />
              </FloatingLabel>
              <FloatingLabel controlId="" label="Password">
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={onFormChange}
                  value={formInput.password}
                  name="password"
                />
              </FloatingLabel>
              <button>Sign In</button>
              <br />
              <div className="help">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox-background"
                    name=""
                    id="checkbox"
                  />
                  <label htmlFor="checkbox">Remember me</label>
                </div>
                <div>Need help?</div>
              </div>
              <br />

              <div className="font-utilityclass">
                New to Netflix?{" "}
                <a href="#" className="text-white">
                  <b>Sign up now</b>
                </a>{" "}
              </div>
              <br />

              <div className="font-utilityclass2">
                This page is protected by google reCAPTCHA to ensure you're not
                a bot.<a href="#">Learn more.</a>
              </div>
            </>
          </form>
        </div>
      </div>
      <div className="footer">
       
          <ul>
            <li>Questions? Contact us</li>
            <li>FAQ</li>
            <li>Cookie Preferences</li>
            <li></li>
          </ul>
          <ul>
            <li>Help Centre</li>
            <li>Corporate Information</li>
          </ul>
        

        <ul className="footer-terms">
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
}
