import React, { useState } from "react";
import setRequestProps from "../../functions/local/setRequestProps";
import setRequestDetail from "../../functions/local/setRequestDetail";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Request.css";

function objectMap(object, func) {
  return Object.keys(object).reduce((result, key) => {
    result[key] = func(object[key], key);
    return result;
  }, {});
}

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const imagesObject = objectMap(props.images, (image, key) => {
    return (
      <Carousel.Item key={key}>
        <img src={image.src} alt="" className="carousel__image" />
        <Carousel.Caption>
          <span>{image.description}</span>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  const images = Object.values(imagesObject);

  return (
    <Carousel
      activeIndex={index}
      interval={null}
      onSelect={handleSelect}
      className="request__image"
    >
      {images}
    </Carousel>
  );
}

const Request = ({ detail, endDate, from, id }) => {
  const { answerState, nextURL } = setRequestProps(from, detail);
  const { description, images } = setRequestDetail(detail);

  return (
    <div
      className={`request request--${answerState}`}
      key={id}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `${nextURL}?id=${id}`;
      }}
    >
      <span className={`request__descrip request__descrip--${answerState}`}>
        {description}
      </span>
      <ControlledCarousel
        // props에서 받지 않음
        images={images}
        answerState={answerState}
        time={endDate}
      />
    </div>
  );
};

export default Request;
