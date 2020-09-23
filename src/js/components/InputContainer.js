import React from "react";

const setContent = (order) => {
  let name, placeholder, content;

  if (order === 0) {
    name = "store-name";
    placeholder = "가게명을 입력해주세요.";
    content = "가게명";
  } else if (order === 1) {
    name = "phone-number";
    placeholder = "한복 구매시 증빙서 발급을 위해 사용됩니다.";
    content = "전화번호";
  }

  return { name, placeholder, content };
};

const InputContainer = (props) => {
  let { name, placeholder, content } = setContent(props.order);

  return (
    <div className="input-container">
      <label className="input-name bottom-item--mob" htmlFor={name}>
        {content}
      </label>
      <input
        type="text"
        className="text-input"
        name={name}
        form="signup-form"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputContainer;
