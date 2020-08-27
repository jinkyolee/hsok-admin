import React from "react";
import "../../css/routes/Home.css";
import "../../css/components/Button.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-content">
      <div className="logo">
        <img className="logo__image" src={logo} alt="H:SOK 로고" />
        <div className="logo__descript hidden--mob">
          당신의 손길은 전통을 지키는 아름다운 일입니다
        </div>
      </div>
      <div className="home-actions">
        <Link to="/new-requests" className="button button--new">
          견적 주기
        </Link>
        <Link to="/answered-requests" className="button button--answered">
          완료된 견적
        </Link>
      </div>
    </section>
  );
}

export default Home;
