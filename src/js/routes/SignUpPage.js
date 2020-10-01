import React from "react";
import InputContainer from "../components/InputContainer";
import { CheckboxSmall, CheckboxBig } from "../components/CheckboxContainer";
import Navigation from "../components/Navigation";
import "../../css/routes/SignUpPage.css";

const LoginPage = () => {
  return (
    <div className="home-content">
      <Navigation state="new" link="/login" title="회원 가입" />
      <div className="explanation">
        아래의 간단한 회원가입을 통해서 <br />
        신규 고객들에게 우리 가게를 알릴 수 있습니다.
      </div>
      <form className="signup-form" name="signup-form">
        <InputContainer order={0} />
        <InputContainer order={1} />
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
