import React, { useEffect, useState } from "react";
import "../../css/routes/RequestDetail.css";
import "../../css/components/Button.css";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import DetailComponent from "../components/DetailComponent";
import { sendDetailData } from "../functions/fetchRequests";

const getRequests = async () => {
  const receivedData = sendDetailData();
  return new Promise((resolve) => {
    resolve(receivedData);
  });
};

const setButtonVisibilty = (loadState) => {
  const button = document.querySelector(".button");
  if (loadState) {
    button.hidden = true;
  } else {
    button.hidden = false;
  }
};

const RequestDetail = (props) => {
  const [content, setContent] = useState([]);
  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    setButtonVisibilty(loadState);
    getRequests().then((detailData) => {
      setContent(detailData);
      setLoadState(false);
    });
  }, [loadState]);

  return (
    <>
      <Navigation state="new" link="/new-requests" title="요청 세부 정보" />
      <section className="home-content" style={{ height: "auto" }}>
        <section className="detail-container top-item--desk">
          {loadState ? (
            <h1>Loading</h1>
          ) : (
            content.map((data, index) => {
              return (
                <DetailComponent
                  description={data.description}
                  image={data.src}
                  key={index}
                />
              );
            })
          )}
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
