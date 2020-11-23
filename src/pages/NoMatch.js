import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
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
