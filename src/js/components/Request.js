import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRequestProps from "../hooks/useRequestProps";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/components/Request.css";

function objectMap(object, func) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = func(object[key], key);
    return result;
  }, {});
}

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imagesObject = objectMap(props.images, function (image, key) {
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

const Request = (props) => {
  const { answerState, nextURL } = useRequestProps(props);

  return (
    <Link
      className={`request request--${answerState}`}
      key={props.id}
      to={`${nextURL}?id=${props.id}`}
    >
      <span className={`request__descrip request__descrip--${answerState}`}>
        {props.description}
      </span>
      <ControlledCarousel
        // props에서 받지 않음
        images={props.images}
        answerState={answerState}
        time="lots of time"
      />
    </Link>
  );
};

export default Request;
