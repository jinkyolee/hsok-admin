import React from "react";
import buttonImage from "../../images/add-img-btn.png";

function AnswerPage() {
  return (
    <form class="answer-sheet top-item--mob top-item--desk">
      <section class="answer-set">
        <span class="answer__title">가격과 할인 정보</span>
        <section class="input-btn-container">
          <textarea class="answer-input"></textarea>
          <div class="add-img-button">
            <img src={buttonImage} class="add-img-button__image" alt="" />
          </div>
        </section>
      </section>
      <section class="answer-set">
        <span class="answer__title">맞춤/대여 과정과 소요 기간</span>
        <section class="input-btn-container">
          <textarea class="answer-input"></textarea>
          <div class="add-img-button">
            <img src={buttonImage} class="add-img-button__image" alt="" />
          </div>
        </section>
      </section>
      <section class="answer-set">
        <span class="answer__title">서비스 상품</span>
        <section class="input-btn-container">
          <textarea class="answer-input"></textarea>
          <div class="add-img-button">
            <img src={buttonImage} class="add-img-button__image" alt="" />
          </div>
        </section>
      </section>
      <section class="answer-set">
        <span class="answer__title">한복 디자인</span>
        <section class="input-btn-container">
          <textarea class="answer-input"></textarea>
          <div class="add-img-button">
            <img src={buttonImage} class="add-img-button__image" alt="" />
          </div>
        </section>
      </section>
      <section class="answer-set">
        <span class="answer__title">한복 색감</span>
        <section class="input-btn-container">
          <textarea class="answer-input"></textarea>
          <div class="add-img-button">
            <img src={buttonImage} class="add-img-button__image" alt="" />
          </div>
        </section>
      </section>
      <section class="answer-set">
        <span class="answer__title">디테일</span>
        <section class="input-btn-container">
          <textarea class="answer-input"></textarea>
          <div class="add-img-button">
            <img src={buttonImage} class="add-img-button__image" alt="" />
          </div>
        </section>
      </section>
      <section class="answer-set">
        <span class="answer__title">참고사항</span>
        <section class="input-btn-container">
          <textarea class="answer-input"></textarea>
          <div class="add-img-button">
            <img src={buttonImage} class="add-img-button__image" alt="" />
          </div>
        </section>
      </section>
      <a href="./new-requests" class="button button--big button--new">
        <span class="button__text button__text--large">견적 답변 완료</span>
      </a>
    </form>
  );
}

export default AnswerPage;
