import React from "react";
import { Link } from "react-router-dom";

export default class NoMatch extends React.Component {
  componentDidMount() {
    const navBar = document.querySelector(".nav-bar");
    navBar.style.visibility = "hidden";
  }

  componentWillUnmount() {
    const navBar = document.querySelector(".nav-bar");
    navBar.style.visibility = "visible";
  }

  render() {
    return (
      <div>
        <h1 style={{ marginLeft: 20 }}>404 No Page Found</h1>
        <Link to="/" style={{ marginLeft: 20 }}>
          홈으로 가기
        </Link>
      </div>
    );
  }
}
