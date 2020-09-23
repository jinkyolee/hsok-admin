import React from "react";
import AnswerSet from "../components/AnswerSet";
import "../../css/routes/AnswerDetail.css";

const AnswerPage = () => {
  const answerSets = [false, false, false, false, false, false, false];

  return (
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
  );
};

export default AnswerPage;
