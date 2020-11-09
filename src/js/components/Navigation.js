import React from "react";
import "../../css/components/Navigation.css";
import { Link } from "react-router-dom";
import useSetNavType from "../hooks/useSetNavType";

// Props that have to be sent status, link, title
// NavBar when at home
// <nav className="nav-bar center--mob">
//  <span className="nav-bar__text pos-left margin-none--mob">H:SOK</span>
// </nav>;

const Navigation = (props) => {
  const { type, tag } = useSetNavType();
  const { state, link, title } = props;
  let location = window.location.pathname;
  let template;

  if (location === "/hsok-admin/") {
    template = (
      // eslint-disable-next-line
      <nav className="nav-bar nav-bar--new center--mob">
        <span className="nav-bar__text pos-left margin-none--mob">H:SOK</span>
      </nav>
    );
  } else {
    template = (
      <nav className={`nav-bar nav-bar--${state} center${tag}`}>
        {type === "link" ? (
          <div className="pos-left column">
            <Link to={link} className="nav-bar__text">
              {"<"}&nbsp;&nbsp;{title}
            </Link>
          </div>
        ) : (
          <span className="pos-left nav-bar__text">{title}</span>
        )}
        <Link to="/hsok-admin/" className="pos-right">
          홈
        </Link>
      </nav>
    );
  }

  return template;
};

export default Navigation;
