import React from "react";
import AnswerSet from "../components/AnswerSet";
import "../../css/routes/AnswerSet.css";
import Navigation from "../components/Navigation";

const AnswerPage = (props) => {
  const answerSets = [false, false, false, false, false, false, false];

  return (
    <>
      <Navigation
        state="new"
        link={`/hsok-admin/request-detail?${props.location.search}`}
        title="견적 주기"
      />
      <form
        className="answer-sheet top-item--mob top-item--desk"
        name="answerSheet"
      >
        {answerSets.map((answered, index) => {
          return <AnswerSet key={index} order={index} answered={answered} />;
        })}
        <input
          type="submit"
          className="button button--big button--new"
          value="견적 답변 완료"
        />
      </form>
    </>
  );
};

export default AnswerPage;
