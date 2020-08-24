import React from "react";
import "../../css/components/Navigation.css";
import { Link } from "react-router-dom";

function Navigation(props) {
  var navBar;
  const { children } = props;

  var url = props.location.pathname;
  if (url === "/") {
    navBar = (
      <nav className="nav-bar hidden-mob">
        <span className="nav-bar__text pos-left">H:SOK</span>
      </nav>
    );
  } else if (
    url === "/new-requests" ||
    url === "/request-detail" ||
    url === "/answer-request"
  ) {
    navBar = (
      <nav className="nav-bar hidden-mob">
        <span className="nav-bar__text pos-left">H:SOK</span>
        <Link to="/" className="pos-right">
          홈
        </Link>
      </nav>
    );
  } else if (url === "/answered-requests" || "/answer-detail") {
    navBar = (
      <nav className="nav-bar nav-bar--answered hidden-mob">
        <span className="nav-bar__text pos-left">H:SOK</span>
        <Link to="/" className="pos-right">
          홈
        </Link>
      </nav>
    );
  }

  const template = (
    <div className="main">
      {navBar}
      {children}
    </div>
  );

  return template;
}

export default Navigation;
