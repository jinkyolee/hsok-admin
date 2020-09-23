import React from "react";
import { Link } from "react-router-dom";
import "../../css/routes/AnswerDetail.css";
// import AnswerSetWithImage from "../components/AnswerSetWithImage";
import AnswerSet from "../components/AnswerSet";

function AnswerDetail(props) {
  const answerSets = [true, true, true, true, true, true, true];

  return (
    <section className="answer-sheet top-item--mob top-item--desk">
      {answerSets.map((answered, index) => {
        return <AnswerSet key={index} order={index} answered={answered} />;
      })}
      <Link
        to="./answered-requests"
        className="button button--big button--answered"
      >
        다른 요청 보기
      </Link>
    </section>
  );
}

export default AnswerDetail;
