import React from "react";
import { withRouter } from "react-router-dom";
import usePrevState from "../hooks/usePrevState";

const ScrollToTop = (props) => {
  const location = props.location;
  const prevLocation = usePrevState(location);

  if (location !== prevLocation) {
    window.scrollTo(0, 0);
  }

  return <React.Fragment />;
};

export default withRouter(ScrollToTop);
