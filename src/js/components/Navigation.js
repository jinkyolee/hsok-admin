import React, { useState, useEffect } from "react";
import "../../css/components/Navigation.css";
import { Link } from "react-router-dom";
import useNavTabs from "../hooks/useNavTabs";
import useSetNavType from "../hooks/useSetNavType";

const Navigation = (props) => {
  const [template, setTemplate] = useState("");
  const { children, location } = props,
    { pathname } = location;
  const { link, title, status } = useNavTabs(pathname);
  const tagType = useSetNavType();

  useEffect(() => {
    var navBar;
    if (pathname === "/") {
      navBar = (
        <nav className="nav-bar center--mob">
          <span className="nav-bar__text pos-left margin-none--mob">H:SOK</span>
        </nav>
      );
    } else {
      if (tagType === "link") {
        navBar = (
          <nav className={`nav-bar nav-bar${status} center`}>
            <div className="pos-left column">
              <Link to={link} className="nav-bar__text">
                {"<"}&nbsp;&nbsp;{title}
              </Link>
            </div>
            <Link to="/" className="pos-right">
              홈
            </Link>
          </nav>
        );
      } else {
        navBar = (
          <nav className={`nav-bar nav-bar${status} center--mob`}>
            <span className="pos-left nav-bar__text">{title}</span>
            <Link to="/" className="pos-right">
              홈
            </Link>
          </nav>
        );
      }
    }
    setTemplate(
      <div className="main">
        {navBar}
        {children}
      </div>
    );
  }, [props, children, link, pathname, status, tagType, title]);

  return template;
};

export default Navigation;
