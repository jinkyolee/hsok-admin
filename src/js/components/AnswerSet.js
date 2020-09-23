import React from "react";
import buttonImage from "../../images/add-img-btn.png";

function handleClick() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
}

function setTemplate(props) {
  var title;
  var nameTag;
  var cssTag;
  var elementTemplate;

  const { order } = props;

  if (order === 0) {
    title = "가격과 할인 정보";
    nameTag = "price";
  } else if (order === 1) {
    title = "맞춤/대여 과정과 소요 기간";
    nameTag = "time";
  } else if (order === 2) {
    title = "서비스 상품";
    nameTag = "service";
  } else if (order === 3) {
    title = "한복 디자인";
    nameTag = "design";
  } else if (order === 4) {
    title = "한복 색감";
    nameTag = "color";
  } else if (order === 5) {
    title = "디테일";
    nameTag = "detail";
  } else if (order === 6) {
    title = "참고 사항";
    nameTag = "misc";
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

  // should use useState when receiving images from backend
  // const [images, setImages] = useState([]);

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
