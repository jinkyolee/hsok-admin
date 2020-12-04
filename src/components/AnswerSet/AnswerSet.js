import React from "react";
import { setTemplate } from "../../functions/local/setTemplate";

const AnswerSet = ({ order, answered, hasImages }) => {
  const { title, cssTag, elementTemplate } = setTemplate(order, answered);

  // should use useState when receiving images from backend
  // const [images, setImages] = useState([]);

  return (
    <section className="answer-set">
      <span className={`answer__title ${cssTag}`}>{title}</span>
      {elementTemplate}
      {hasImages && <section class="image-array"></section>}
    </section>
  );
};

export default AnswerSet;
