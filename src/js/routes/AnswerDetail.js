import React from "react";
import { Link } from "react-router-dom";
import "../../css/routes/AnswerDetail.css";
// import AnswerSetWithImage from "../components/AnswerSetWithImage";
import AnswerSet from "../components/AnswerSet";

function AnswerDetail(props) {
  return (
    <section class="answer-sheet top-item--mob top-item--desk">
      <AnswerSet key={1} answered={true} order={1} />
      <AnswerSet key={2} answered={true} order={2} />
      <AnswerSet key={3} answered={true} order={3} />
      <AnswerSet key={4} answered={true} order={4} />
      <AnswerSet key={5} answered={true} order={5} />
      <AnswerSet key={6} answered={true} order={6} />
      <AnswerSet key={7} answered={true} order={7} />
      <Link
        to="./answered-requests"
        className="button button--big button--answered"
      >
        <span class="button__text button__text--large button__text--answered">
          다른 요청 보기
        </span>
      </Link>
    </section>
  );
}

export default AnswerDetail;
