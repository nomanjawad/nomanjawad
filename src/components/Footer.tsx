import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="footer-bottom pt-50 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Copyright @{year}, <a href="#">Noman Jawad</a> All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-text extra-copyright">
                <ul>
                  <li>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
