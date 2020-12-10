import React, { useEffect, useRef, useState } from "react";
import Request from "../../components/molecules/Request/Request";
import "./RequestPage.css";
import Navigation from "../../components/organisms/Navigation/Navigation";
import { fetchRequests } from "../../functions/global/fetchRequests";
// import { REQUESTS_URL } from "../../functions/global/urls";

const NewRequests = () => {
  const rootLocation = "/hsok-admin/new-requests";
  const [loadState, setLoadState] = useState(true);
  const [requests, setRequests] = useState();

  const getRequests = async () => {
    let requests;
    const resp = await fetchRequests(
      "unanswered",
      JSON.parse(window.localStorage.getItem("app_user")).user_pk
    );

    requests = resp.filter((request) => request.ended_or_not !== true);

    return requests;
  };

  useEffect(() => {
    getRequests()
      .then((resp) => setRequests(resp))
      .then(() => setLoadState(false));
  }, [requests]);

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
        {loadState ? (
          <></>
        ) : (
          <button
            type="button"
            onClick={() => {
              console.log(getRequests());
              window.scrollTo(0, 0);
            }}
            className="button button--new button--big"
          >
            새로고침
          </button>
        )}
      </div>
    </>
  );
};

export default NewRequests;
