import React from "react";
import AnswerSet from "../components/AnswerSet";
import "../../css/routes/AnswerDetail.css";

function AnswerPage() {
  return (
    <form className="answer-sheet top-item--mob top-item--desk">
      <AnswerSet key={1} order={1} answered={false} />
      <AnswerSet key={2} order={2} answered={false} />
      <AnswerSet key={3} order={3} answered={false} />
      <AnswerSet key={4} order={4} answered={false} />
      <AnswerSet key={5} order={5} answered={false} />
      <AnswerSet key={6} order={6} answered={false} />
      <AnswerSet key={7} order={7} answered={false} />
      <input
        type="submit"
        className="button button--big button--new"
        value="견적 답변 완료"
      />
    </form>
  );
}

export default AnswerPage;
