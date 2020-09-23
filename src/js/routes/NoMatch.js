import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  useEffect(() => {
    const navBar = document.querySelector(".nav-bar");
    navBar.style.visibility = "hidden";
    return () => {
      navBar.style.visibility = "visible";
    };
  });

  return (
    <div>
      <h1 style={{ marginLeft: 20 }}>404 No Page Found</h1>
      <Link to="/" style={{ marginLeft: 20 }}>
        홈으로 가기
      </Link>
    </div>
  );
};

export default NoMatch;
