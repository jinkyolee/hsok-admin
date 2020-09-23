import React from "react";
import buttonImage from "../../images/add-img-btn.png";

function handleClick() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
}

function setTemplate(props) {
  var title;
  var cssTag;
  var elementTemplate;
  var nameTag;

  switch (props.order) {
    case 1:
      title = "가격과 할인 정보";
      nameTag = "price";
      break;
    case 2:
      title = "맞춤/대여 과정과 소요 기간";
      nameTag = "time";
      break;
    case 3:
      title = "서비스 상품";
      nameTag = "service";
      break;
    case 4:
      title = "한복 디자인";
      nameTag = "design";
      break;
    case 5:
      title = "한복 색감";
      nameTag = "color";
      break;
    case 6:
      title = "디테일";
      nameTag = "detail";
      break;
    case 7:
      title = "참고 사항";
      nameTag = "misc";
      break;
    default:
      break;
  }

  if (props.answered) {
    cssTag = "answer__title--answered";
    elementTemplate = (
      <div className="answer__text">
        <span>답변을 쓴 내용 쏼라 쏼라 쏼라 쏼라 쏼라 쏼라 쏼라 쏼라</span>
      </div>
    );
  } else {
    cssTag = "answer__title";
    elementTemplate = (
      <section className="input-btn-container">
        <textarea name={nameTag} className="answer-input"></textarea>
        <div className="button-container">
          <button
            className="add-img-button"
            key={props.order - 1}
            onClick={handleClick}
          >
            {console.log(`Key is ${props.order} for textarea: ${nameTag}`)}
            <img src={buttonImage} className="add-img-button__image" alt="" />
          </button>
          <input type="file" key={props.order} name={title} hidden />
        </div>
      </section>
    );
  }

  const template = { title, cssTag, elementTemplate };
  return template;
}

function AnswerSet(props) {
  const template = setTemplate(props);

  // need to write function for image arrays in answer sets
  // var images = [];

  // for (images from request {
  //  images.push(<>)
  // })

  return (
    <section className="answer-set">
      <span className={`answer__title ${template.cssTag}`}>
        {template.title}
      </span>
      {template.elementTemplate}
      {props.hasImages && <section class="image-array"></section>}
    </section>
  );
}

export default AnswerSet;
