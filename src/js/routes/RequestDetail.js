import React, { useEffect, useState } from "react";
import image1 from "../../images/hanbok1.jpeg";
import image2 from "../../images/hanbok2.jpeg";
import image3 from "../../images/hanbok3.jpeg";
import image4 from "../../images/hanbok4.jpeg";
import "../../css/routes/RequestDetail.css";
import "../../css/components/Button.css";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import DetailComponent from "../components/DetailComponent";

const requestContent = [
  { description: "재밌어 구름 놀이, 뜬 구름 잡는다고 해도", src: image1 },
  {
    description: "난 재밌어 이게 너네처럼 연기를 하고 싶지는 않아 clouds",
    src: image2,
  },
  {
    description: "뜬 구름s like 솜사탕 같아 뜬 구름s like 솜사탕 같아",
    src: image3,
  },
  {
    description: "연기 같아 연기 같아 연기 같아 내가 하고 있는 건",
    src: image4,
  },
];

const RequestDetail = (props) => {
  const [content, setContent] = useState(requestContent);

  useEffect(() => {
    setContent(content);
  }, [content]);

  return (
    <>
      <Navigation state="new" link="/new-requests" title="요청 세부 정보" />
      <section className="home-content" style={{ height: "auto" }}>
        <section className="detail-container top-item--desk">
          {content.map((data, index) => {
            return (
              <DetailComponent
                description={data.description}
                image={data.src}
                key={index}
              />
            );
          })}
        </section>
        <Link
          to={`/answer-request${props.location.search}`}
          className="button button--big button--new"
        >
          견적 답변 하러 가기
        </Link>
      </section>
    </>
  );
};

export default RequestDetail;
