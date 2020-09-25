import React from "react";
import { Link } from "react-router-dom";

const setContent = (order) => {
  let name, text, link;

  if (order === 0) {
    name = "term-use";
    text = "장인의 한복 이용약관 동의";
    link = "/link-to-terms";
  } else if (order === 1) {
    name = "personal-info";
    text = "개인정보 수집이용 동의";
    link = "/link-to-personal";
  } else if (order === 2) {
    name = "age-confirm";
    text = "만 14세 확인";
    link = null;
  }

  return { name, text, link };
};

const checkAllBoxes = () => {
  const checkboxes = document.querySelectorAll(".check-small");
  const largeCheck = document.querySelector("#check-big");
  let checkState = false;

  if (largeCheck.checked) {
    checkState = true;
  } else {
    checkState = false;
  }

  for (let checkbox of checkboxes) {
    checkbox.checked = checkState;
  }
};

const CheckboxSmall = (props) => {
  const { name, text, link } = setContent(props.order);

  return (
    <div className="check-container">
      <div className="check-column">
        <input type="checkbox" className="check-small" name={name} required />
        <label className="check-small__lab" name={name}>
          {text}
        </label>
      </div>
      {link ? (
        <Link to={link} className="term-link">
          ⟶
        </Link>
      ) : null}
    </div>
  );
};

const CheckboxBig = () => {
  return (
    <div className="check-container">
      <div className="check-column">
        <input
          type="checkbox"
          name="agree-all"
          id="check-big"
          onChange={checkAllBoxes}
        />
        <label id="check-big__lab" htmlFor="agree-all">
          전체 동의
        </label>
      </div>
    </div>
  );
};

export { CheckboxSmall, CheckboxBig };
