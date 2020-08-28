import React from "react";
import "../../css/components/Navigation.css";
import { Link } from "react-router-dom";

function setTabs(url) {
  var link;
  var title;
  var classTag;
  var tagType;

  const screenSize = window.screen.width;

  switch (url) {
    case "/new-requests":
      link = "/";
      title = "새 요청";
      classTag = "column";
      break;
    case "/request-detail":
      link = "/new-requests";
      title = "세부 사항";
      classTag = "column";
      break;
    case "/answer-request":
      link = "/request-detail";
      title = "견적 답변하기";
      classTag = "column--large";
      break;
    case "/answered-requests":
      link = "/";
      title = "답변한 요청";
      classTag = "column";
      break;
    case "/answer-detail":
      link = "/answered-requests";
      title = "답변 보기";
      classTag = "column";
      break;
    default:
      break;
  }

  if (screenSize > 840) {
    tagType = "span";
  } else if (screenSize < 840) {
    tagType = "link";
  }

  const elements = { link, title, tagType, classTag };
  return elements;
}

export default function Navigation(props) {
  var navBar;
  const { children } = props;
  var url = props.location.pathname;
  var elements = setTabs(url);

  if (url === "/") {
    navBar = (
      <nav className="nav-bar center--mob">
        <span className="nav-bar__text pos-left margin-none--mob">H:SOK</span>
      </nav>
    );
  } else if (
    url === "/new-requests" ||
    url === "/request-detail" ||
    url === "/answer-request"
  ) {
    navBar = (
      <nav className="nav-bar">
        {elements.tagType === "link" ? (
          <div className="pos-left column">
            <Link to={elements.link} className="nav-bar__text">
              {"<"}&nbsp;&nbsp;{elements.title}
            </Link>
          </div>
        ) : (
          <span className="pos-left nav-bar__text">{elements.title}</span>
        )}
        <Link to="/" className="pos-right">
          홈
        </Link>
      </nav>
    );
  } else if (url === "/answered-requests" || "/answer-detail") {
    navBar = (
      <nav className="nav-bar nav-bar--answered">
        {elements.tagType === "link" ? (
          <div className="pos-left">
            <Link to={elements.link} className="nav-bar__text">
              {"<"} {elements.title}
            </Link>
          </div>
        ) : (
          <span className="pos-left nav-bar__text">{elements.title}</span>
        )}
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
