import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InputContainer from "../../components/molecules/InputContainer";
import Navigation from "../../components/organisms/Navigation/Navigation";
import { handleLogin } from "../../functions/global/auth";
import "./SignUpPage.css";
import { LoginContext } from "../../functions/global/LoginContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const { setLogin } = useContext(LoginContext);

  const setButtonText = (e) => {
    if (username && phoneNum) {
      e.target.value = "로그인 중...";
    }
  };

  return (
    <div className="home-content">
      <Navigation state="new" link="/" title="로그인" />
      <div className="explanation--login">로그인하셔야 합니다.</div>
      <form
        className="login-form"
        name="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          // Auth Handler
          handleLogin(username, phoneNum, setLogin);
        }}
      >
        <InputContainer order={0} onChange={setUsername} />
        <InputContainer order={1} onChange={setPhoneNum} />
        <div className="other-controls">
          <Link to="/signup" className="signup-link">
            회원 가입
          </Link>
        </div>
        <input
          type="submit"
          className="button button--diff button--new"
          onClick={(e) => {
            setButtonText(e);
          }}
          value="로그인하기"
        />
      </form>
    </div>
  );
};

export default LoginPage;
