import React from "react";
import image1 from "../../images/hanbok1.jpeg";
import image2 from "../../images/hanbok2.jpeg";
import image3 from "../../images/hanbok3.jpeg";
import image4 from "../../images/hanbok4.jpeg";
import "../../css/routes/RequestDetail.css";
import "../../css/components/Button.css";
import { Link } from "react-router-dom";

function RequestDetail(props) {
  // parameter를 props가 아니라 request에서 파싱한 값으로 받아야함
  return (
    <section className="home-content" style={{ height: "auto" }}>
      <section className="detail-container top-item--desk">
        <div className="request-detail top-item--mob">
          <img src={image1} className="request-detail__image" alt="한복 사진" />
          <section className="request-detail__descript">
            재밌어 구름 놀이, 뜬 구름 잡는다고 해도
          </section>
        </div>
        <div className="request-detail ">
          <img src={image2} className="request-detail__image" alt="한복 사진" />
          <section className="request-detail__descript">
            난 재밌어 이게 너네처럼 연기를 하고 싶지는 않아 clouds
          </section>
        </div>
        <div className="request-detail">
          <img src={image3} className="request-detail__image" alt="한복 사진" />
          <section className="request-detail__descript">
            뜬 구름s like 솜사탕 같아 뜬 구름s like 솜사탕 같아
          </section>
        </div>
        <div className="request-detail ">
          <img src={image4} className="request-detail__image" alt="한복 사진" />
          <section className="request-detail__descript">
            연기 같아 연기 같아 연기 같아 내가 하고 있는 건
          </section>
        </div>
      </section>
      <Link to="/answer-request" className="button button--big button--new">
        견적 답변 하러 가기
      </Link>
    </section>
  );
}

export default RequestDetail;
