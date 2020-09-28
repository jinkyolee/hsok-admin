import React from "react";
import { Link } from "react-router-dom";
import checkAll from "../functions/checkAll";
import setLarge from "../functions/setLarge";

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

const CheckboxSmall = (props) => {
  const { name, text, link } = setContent(props.order);

  return (
    <div className="check-container">
      <div className="check-column">
        <input
          type="checkbox"
          className="check-small"
          name={name}
          onChange={setLarge}
          required
        />
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
          onChange={checkAll}
        />
        <label id="check-big__lab" htmlFor="agree-all">
          전체 동의
        </label>
      </div>
    </div>
  );
};

export { CheckboxSmall, CheckboxBig };
