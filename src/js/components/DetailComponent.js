import React from "react";

const DetailComponent = (props) => {
  return (
    <div className="request-detail">
      <img
        src={props.image}
        className="request-detail__image"
        alt="한복 사진"
      />
      <section className="request-detail__descript">
        {props.description}
      </section>
    </div>
  );
};

export default DetailComponent;
