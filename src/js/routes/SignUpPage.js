import React, { useState } from "react";
import InputContainer from "../components/InputContainer";
import { CheckboxSmall, CheckboxBig } from "../components/CheckboxContainer";
import Navigation from "../components/Navigation";
import { handleSignUp } from "../functions/auth";
import "../../css/routes/SignUpPage.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  return (
    <div className="home-content">
      <Navigation state="new" link="/login" title="회원 가입" />
      <div className="explanation">
        아래의 간단한 회원가입을 통해서 <br />
        신규 고객들에게 우리 가게를 알릴 수 있습니다.
      </div>
      <form
        className="signup-form"
        name="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(username, phoneNum);
        }}
      >
        <InputContainer order={0} onChange={setUsername} />
        <InputContainer order={1} onChange={setPhoneNum} />
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

export default SignUpPage;
