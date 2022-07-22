import React from "react";
import "./Login.scss";
import { MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";
import Ig from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Fb from "../../assets/fb.svg";
import Form from "../Form/Form";
const Login = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="grid grid--2fr--1fr">
          <div className="d-flex flex-column mh-400 justify-content center">
            <div>
              <h3>Get a quote</h3>
              <p>
                Fill up the form and our Team will get back <br />
                to you within 24 hours
              </p>
            </div>
            <div className="contacts">
              <div className="d-flex align-items-center">
                <MdLocalPhone />
                <div>
                  <span>+012345678910</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <IoMdMail /> <span>hello@flowbase.com</span>
              </div>
              <div className="d-flex align-items-center">
                <RiMapPin2Fill />
                <span>102 Street 2714 Don</span>
              </div>
            </div>
            <div className="mt-auto">
              <div className="socials d-flex align-items-center">
                <a href="/">
                  <span>
                    <img src={Fb} alt="fb" />
                  </span>
                </a>
                <a href="/">
                  <span>
                    <img src={Twitter} alt="twitter" />
                  </span>
                </a>
                <a href="/">
                  <span>
                    <img src={Ig} alt="instagram" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
