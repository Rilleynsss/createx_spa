import { FC } from "react";
import hearth from "../img/Heart.svg";
import logo from "../img/Footer/footer_logo.png";
import whatsapp from "../img/Footer/Whatsapp.svg";
import msg from "../img/Footer/Messanger.svg";
import twitter from "../img/Footer/Twitter.svg";
import fb from "../img/Footer/Facebook.svg";
import yt from "../img/Footer/YouTube.svg";
import rootCls from "../style/index.module.css";
import cls from "../style/footer.module.css";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className={cls.footer}>
      <div className={rootCls.container}>
        <div className={cls.footerTop}>
          <div>
            <div className={cls.logoIcons}>
              <img src={logo} alt="" className={cls.footerLogo} />
              <ul>
                <li>
                  <img src={whatsapp} alt="" />
                </li>
                <li>
                  <img src={msg} alt="" />
                </li>
                <li>
                  <img src={fb} alt="" />
                </li>
                <li>
                  <img src={twitter} alt="" />
                </li>
                <li>
                  <img src={yt} alt="" />
                </li>
              </ul>
            </div>
            <p>
              Createx Construction Bureau has been successfully operating in the
              USA construction market since 2000. We are proud to offer you
              quality construction and exemplary service. Our mission is to set
              the highest standards for construction sphere.
            </p>
          </div>
          <div>
            <div>
              <h4>Let’s stay in touch</h4>
              <div className={cls.footerForm}>
                <input type="text" placeholder="Your email address " />
                <button>subscribe</button>
              </div>
              <p>
                *Subscribe to our newsletter to receive communications and early
                updates from Createx Construction Bureau.
              </p>
            </div>
          </div>
        </div>
        <div className={cls.footerMid}>
          <div className={cls.midContainer}>
            <h3>HEAD OFFICE</h3>
            <ul>
              <li>
                Address: <span>8502 Preston Rd. Inglewood, New York</span>
              </li>
              <li>
                Call: <span> (405) 555-0128</span>
              </li>
              <li>
                Email: <span>hello@createx.com</span>
              </li>
            </ul>
          </div>
          <div className={cls.midContainer}>
            <h3>WHO WE ARE</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/about">Available Positions</Link>
              </li>
              <li>
                <Link to="contacts">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className={cls.midContainer}>
            <h3>OUR EXPERIENCE</h3>
            <ul>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={cls.footerBottom}>
          © All rights reserved. Made with <img src={hearth} alt="" /> by
          Createx Studio
        </div>
      </div>
    </div>
  );
};

export default Footer;
