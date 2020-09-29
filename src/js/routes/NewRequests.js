import React, { useEffect, useState } from "react";
import Request from "../components/Request";
import "../../css/routes/RequestPage.css";
import Navigation from "../components/Navigation";
import dataSend from "../functions/dataSendPrac";

const getRequests = async (token) => {
  const receivedData = await dataSend(token);
  return new Promise((resolve) => {
    resolve(receivedData);
  });
};

const NewRequests = () => {
  const rootLocation = "/new-requests";
  const [requests, setRequests] = useState([]);
  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    getRequests("successToken").then((requests) => {
      setRequests(requests);
      setLoadState(false);
    });
  }, []);

  return (
    <>
      <Navigation state="--new" link="/" title="새 요청" />
      <div className="requests-container">
        {loadState ? (
          <h1>Loading</h1>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default NewRequests;
