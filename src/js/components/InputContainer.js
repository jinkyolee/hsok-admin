import React from "react";

const setContent = (order) => {
  let name, placeholder, content, containerClass;

  if (order === 0) {
    name = "store-name";
    placeholder = "가게명을 입력해주세요.";
    content = "가게명";
    containerClass = "";
  } else if (order === 1) {
    name = "phone-number";
    placeholder = "한복 구매시 증빙서 발급을 위해 사용됩니다.";
    content = "전화번호";
    containerClass = "";
  } else if (order === 2) {
    name = "password";
    placeholder = "비밀번호를 입력하세요.";
    content = "비밀번호";
    containerClass = "";
  } else if (order === 3) {
    name = "password-confirm";
    placeholder = "위에 입력한 비밀번호를 한 번더 입력하세요.";
    content = "비밀번호 확인";
    containerClass = "bottom-item--mob";
  }

  return { name, placeholder, content, containerClass };
};

const InputContainer = (props) => {
  let { name, placeholder, content, containerClass } = setContent(props.order);

  return (
    <div className={`input-container ${containerClass}`}>
      <label className="input-name" htmlFor={name}>
        {content}
      </label>
      <input
        type="text"
        className="text-input"
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputContainer;
