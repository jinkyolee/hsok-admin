import React from "react";
import { Link } from "react-router-dom";
import InputContainer from "../components/InputContainer";
import Navigation from "../components/Navigation";
import "../../css/routes/SignUpPage.css";

const LoginPage = () => {
  return (
    <div className="home-content">
      <Navigation state="new" link="/" title="로그인" />
      <div className="explanation--login">로그인하셔야 합니다.</div>
      <form className="login-form" name="login-form">
        <InputContainer order={0} />
        <InputContainer order={1} />
        <div className="other-controls">
          <Link to="/signup" className="signup-link">
            회원 가입
          </Link>
        </div>
        <input
          type="submit"
          className="button button--diff button--new"
          value="로그인하기"
        />
      </form>
    </div>
  );
};

export default LoginPage;
