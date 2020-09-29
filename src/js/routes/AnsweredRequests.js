import React, { useEffect, useState } from "react";
import Request from "../components/Request";
import image1 from "../../images/hanbok1.jpeg";
import image2 from "../../images/hanbok2.jpeg";
import image3 from "../../images/hanbok3.jpeg";
import image4 from "../../images/hanbok4.jpeg";
import "../../css/routes/RequestPage.css";
import Navigation from "../components/Navigation";

const images = [
  { src: image1, description: "한복 1" },
  { src: image2, description: "한복 2" },
  { src: image3, description: "한복 3" },
  { src: image4, description: "한복 4" },
];

const AnsweredRequests = () => {
  const rootLocation = "/answered-requests";
  const [requests, setRequests] = useState([
    {
      description: "소리 없는 방구",
      images: images,
    },
    {
      description: "훈이 없는 짱구",
      images: images,
    },
    {
      description: "이곳은 소라게 도시",
      images: images,
    },
    {
      description: "이곳은 소락의 도시",
      images: images,
    },
  ]);

  useEffect(() => {
    setRequests(requests);
  }, [requests]);

  return (
    <>
      <Navigation state="--answered" link="/" title="답변한 요청" />
      <div className="requests-container">
        {requests.map((requestData, index) => {
          return (
            <Request
              key={index}
              id={index}
              description={requestData.description}
              images={requestData.images}
              from={rootLocation}
            />
          );
        })}
      </div>
    </>
  );
};

export default AnsweredRequests;
