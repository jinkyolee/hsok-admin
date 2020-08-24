import React from "react";
// import ImageSet from "./ImageSet";

function setTemplate(props) {
  var title;
  var cssTag;

  switch (props.order) {
    case 1:
      title = "가격과 할인 정보";
      break;
    case 2:
      title = "맞춤/대여 과정과 소요 기간";
      break;
    case 3:
      title = "서비스 상품";
      break;
    case 4:
      title = "한복 디자인";
      break;
    case 5:
      title = "한복 색감";
      break;
    case 6:
      title = "디테일";
      break;
    case 7:
      title = "참고 사항";
      break;
  }

  if (props.answered) {
    cssTag = "answer__title--answered";
  } else {
    cssTag = "answer__title";
  }

  const template = { title, cssTag };

  return template;
}

function AnswerSet(props) {
  const template = setTemplate(props);

  return (
    <section className="answer-set">
      <span className={`answer__title ${template.cssTag}`}>
        {template.title}
      </span>
      <div className="answer__text">
        <span>답변을 쓴 내용 쏼라 쏼라 쏼라 쏼라 쏼라 쏼라 쏼라 쏼라</span>
      </div>
    </section>
  );
}

export default AnswerSet;
