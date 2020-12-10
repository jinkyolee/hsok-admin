import React, { useEffect, useState } from "react";
import Request from "../../components/Request/Request";
import "./RequestPage.css";
import Navigation from "../../components/organisms/Navigation/Navigation";
import { fetchRequests } from "../../functions/global/fetchRequests";

const setButtonVisible = (loadState) => {
  const button = document.querySelector(".button");
  if (loadState === true) {
    button.hidden = true;
  } else {
    button.hidden = false;
  }
};

const NewRequests = () => {
  const rootLocation = "/hsok-admin/new-requests";
  const [requests, setRequests] = useState([]);
  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    setButtonVisible(loadState);

    fetchRequests(
      "unanswered",
      JSON.parse(window.localStorage.getItem("app_user")).user_pk
    )
      .then((resp) => {
        const filteredResp = resp.filter(
          (request) => request.ended_or_not !== true
        );
        setRequests(filteredResp);
        console.log(filteredResp);
        return filteredResp;
      })
      .then(() => {
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
          requests.map(({ id, detail_requests, end_date }) => {
            return (
              <Request
                key={id}
                id={id}
                detail={detail_requests}
                endDate={end_date}
                from={rootLocation}
              />
            );
          })
        ) : (
          <h1>No new requests</h1>
        )}
        <button
          type="button"
          onClick={() => {
            setLoadState(true);
            window.scrollTo(0, 0);
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
