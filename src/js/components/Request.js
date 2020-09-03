import React from "react";
import { Link } from "react-router-dom";
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
  const [index, setIndex] = React.useState(0);

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

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerState: null,
      nextURL: null,
    };
  }

  componentDidMount() {
    if (this.props.from === "/answered-requests") {
      this.setState({ answerState: "answered", nextURL: "/answer-detail" });
    } else {
      this.setState({ answerState: "new", nextURL: "/answer-request" });
    }
  }

  render() {
    return (
      <Link
        className={`request request--${this.state.answerState}`}
        key={this.props.id}
        to={this.state.nextURL}
      >
        <span
          className={`request__descrip request__descrip--${this.state.answerState}`}
        >
          {this.props.description}
        </span>
        <ControlledCarousel
          images={this.props.images}
          answerState={this.state.answerState}
          time="lots of time"
        />
      </Link>
    );
  }
}

export default Request;
