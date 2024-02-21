import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import rootCls from "../style/index.module.css";
import cls from "../style/header.module.css";
import logo from "../img/Navbar/logo.svg";
import phone from "../img/Navbar/iPhone.svg";
import chat from "../img/Navbar/Chat.svg";

const Header: FC = () => {
  const links = [
    { to: "/about", text: "About Us", active: true },
    { to: "/service", text: "Services", active: false },
    { to: "/work", text: "Work", active: false },
    { to: "/news", text: "News", active: false },
    { to: "/contacts", text: "Contacts", active: false },
  ];
  const loc = useLocation();
  const connect = [
    {
      img: phone,
      alt: "phone",
      text: "Call us",
      addr: "(405) 555-0128",
    },
    {
      img: chat,
      alt: "chat",
      text: "Talk to us",
      addr: "hello@createx.com",
    },
  ];
  return (
    <div className={[rootCls.container, cls.header].join(" ")}>
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={cls.navBar}>
        <ul>
          {links.map((i, idx) => {
            return (
              <li key={i.to}>
                <Link
                  className={loc.pathname === i.to ? cls.active : ""}
                  to={i.to}
                >
                  {i.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={cls.contact}>
        {connect.map((i) => {
          return (
            <div className={cls.containerContact} key={i.alt}>
              <img src={i.img} alt={i.alt} />
              <div className={cls.contactText}>
                <span>{i.text}</span>
                <span>{i.addr}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
