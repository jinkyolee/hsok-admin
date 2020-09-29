import React from "react";
import { Link } from "react-router-dom";
import "../../css/routes/AnswerDetail.css";
import AnswerSet from "../components/AnswerSet";
import Navigation from "../components/Navigation";

function AnswerDetail(props) {
  const answerSets = [true, true, true, true, true, true, true];

  return (
    <>
      <Navigation
        state="--answered"
        link={`/answered-requests?${props.location.search}`}
        title="답변 보기"
      />
      <section className="answer-sheet top-item--mob top-item--desk">
        {answerSets.map((answered, index) => {
          return <AnswerSet key={index} order={index} answered={answered} />;
        })}
        <Link
          to="/answered-requests"
          className="button button--big button--answered"
        >
          다른 요청 보기
        </Link>
      </section>
    </>
  );
}

export default AnswerDetail;
