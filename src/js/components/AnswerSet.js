import React from "react";
import buttonImage from "../../images/add-img-btn.png";
import handleClick from "../functions/imageButtonClick";

const setTemplate = (props) => {
  var title;
  var nameTag;
  var cssTag;
  var button;
  var elementTemplate;

  const { order } = props;

  if (order === 0) {
    title = "가격과 할인 정보";
    nameTag = "price";
    button = false;
  } else if (order === 1) {
    title = "맞춤/대여 과정과 소요 기간";
    nameTag = "time";
    button = false;
  } else if (order === 2) {
    title = "서비스 상품";
    nameTag = "service";
    button = true;
  } else if (order === 3) {
    title = "한복 디자인";
    nameTag = "design";
    button = true;
  } else if (order === 4) {
    title = "한복 색감";
    nameTag = "color";
    button = true;
  } else if (order === 5) {
    title = "디테일";
    nameTag = "detail";
    button = true;
  } else if (order === 6) {
    title = "참고 사항";
    nameTag = "misc";
    button = true;
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
    if (button) {
      elementTemplate = (
        <section className="input-btn-container">
          <textarea name={nameTag} className="answer-input"></textarea>
          <div className="button-container">
            <button
              type="button"
              className="add-img-button"
              key={props.order - 1}
              onClick={() => handleClick(nameTag)}
            >
              <img src={buttonImage} className="add-img-button__image" alt="" />
            </button>
            <input
              type="file"
              key={props.order}
              name={`${nameTag}File`}
              hidden
            />
          </div>
        </section>
      );
    } else {
      elementTemplate = (
        <section className="input-container">
          <textarea
            name={nameTag}
            className="answer-input answer-input--full"
          ></textarea>
        </section>
      );
    }
  }

  const template = { title, cssTag, elementTemplate };
  return template;
};

const AnswerSet = (props) => {
  const { title, cssTag, elementTemplate } = setTemplate(props);

  // should use useState when receiving images from backend
  // const [images, setImages] = useState([]);

  return (
    <section className="answer-set">
      <span className={`answer__title ${cssTag}`}>{title}</span>
      {elementTemplate}
      {props.hasImages && <section class="image-array"></section>}
    </section>
  );
};

export default AnswerSet;
