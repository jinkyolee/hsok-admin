import React from "react";
import InputContainer from "../components/InputContainer";
import { CheckboxSmall, CheckboxBig } from "../components/CheckboxContainer";
import "../../css/routes/SignUpPage.css";

const LoginPage = () => {
  return (
    <div className="home-content">
      <div className="explanation">
        아래의 간단한 회원가입을 통해서 <br />
        신규 고객들에게 우리 가게를 알릴 수 있습니다.
      </div>
      <form className="signup-form" name="signup-form">
        <InputContainer order={0} />
        <InputContainer order={1} />
        <InputContainer order={2} />
        <InputContainer order={3} />
        <div className="checkbox-content">
          <CheckboxBig />
          <div className="checkboxes">
            <CheckboxSmall order={0} />
            <CheckboxSmall order={1} />
            <CheckboxSmall order={2} />
          </div>
        </div>
        <input
          type="submit"
          className="button button--diff button--new"
          value="완료"
        />
      </form>
    </div>
  );
};

export default LoginPage;
