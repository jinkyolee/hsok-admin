import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export const LinkButton = ({ scheme, text, to }) => {
  return (
    <Link to={to} className={`button button--${scheme}`}>
      {text}
    </Link>
  );
};

export const SubmitButton = ({ scheme, text, onClick = null }) => {
  return (
    <button
      type="submit"
      className={`button button--${scheme}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
