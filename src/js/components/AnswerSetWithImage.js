import React from "react";
import AnswerSet from "./AnswerSet";
import ImageSet from "./ImageSet";

function AnswerSetWithImage(props) {
  return (
    <section class="answer-set">
      <AnswerSet />
      <ImageSet />
    </section>
  );
}
