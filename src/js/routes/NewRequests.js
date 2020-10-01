import React, { useEffect, useState } from "react";
import Request from "../components/Request";
import "../../css/routes/RequestPage.css";
import Navigation from "../components/Navigation";
import { sendRequestData } from "../functions/dataSendPrac";

const getRequests = async (token, type) => {
  const receivedData = await sendRequestData(token, type);
  return new Promise((resolve) => {
    resolve(receivedData);
  });
};

const setButtonVisible = (loadState) => {
  const button = document.querySelector(".button");
  if (loadState === true) {
    button.hidden = true;
  } else {
    button.hidden = false;
  }
};

const NewRequests = () => {
  const rootLocation = "/new-requests";
  const [requests, setRequests] = useState([]);
  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    setButtonVisible(loadState);
    getRequests("successToken", "unempty").then((requests) => {
      setRequests(requests);
      setLoadState(false);
    });
  }, [loadState]);

  return (
    <>
      <Navigation state="new" link="/" title="새 요청" />
      <div className="requests-container">
        {loadState ? (
          <h1>Loading</h1>
        ) : requests.length > 0 ? (
          requests.map(({ description, images }, index) => {
            return (
              <Request
                key={index}
                id={index}
                description={description}
                images={images}
                from={rootLocation}
              />
            );
          })
        ) : (
          <h1>No new requests</h1>
        )}
        <button
          onClick={() => {
            setLoadState(true);
          }}
          className="button button--new button--big"
        >
          새로고침
        </button>
      </div>
    </>
  );
};

export default NewRequests;
