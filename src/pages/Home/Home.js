import React from "react";
import "./Home.css";
import "../../components/0_atoms/Button/Button.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <section className="home-content">
        <div className="logo">
          <img className="logo__image" src={logo} alt="H:SOK 로고" />
          <div className="logo__descript hidden--mob">
            당신의 손길은 전통을 지키는 아름다운 일입니다
          </div>
        </div>
        <div className="home-actions">
          <Link
            to="/new-requests"
            className="button button--new text-decoration-none"
          >
            견적 주기
          </Link>
          <Link
            to="/answered-requests"
            className="button button--answered text-decoration-none"
          >
            완료된 견적
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
