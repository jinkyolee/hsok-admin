import React from "react";
import "./Request/Request.css";

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      images: [],
      index: [],
    };
  }

  moveSlidesBy(n) {
    var i,
      current,
      next,
      animationClass = {
        currentSlide: "",
        nextSlide: "",
      },
      imageIndex = this.state.imageIndex.map(),
      images = this.state.images.map(),
      newIndex = imageIndex + n;

    if (newIndex > imageIndex) {
      if (newIndex >= imageIndex) {
        newIndex = 0;
      }
      animationClass = {
        currentSlide: "moveCurrentSlideLeft",
        nextSlide: "moveNextSlideLeft",
      };
    } else if (newIndex < imageIndex) {
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      animationClass = {
        currentSlide: "moveCurrentSlideRight",
        nextSlide: "movePrevSlideRight",
      };
    }

    if (newIndex != imageIndex) {
      next = images[newIndex];
      current = images[imageIndex];
      for (i = 0; i < images.length; i++) {
        images[i].className = "image-container";
        images[i].style.opacity = 0;
        index[i].classList.remove("active");
      }

      current.classList.add(animationClass.currentSlide);
      next.classList.add(animationClass.nextSlide);
      images[newIndex] = next;
      images[imageIndex] = current;

      index[newIndex].classList.add("active");
      imageIndex = newIndex;
      this.setState({ imageIndex: imageIndex, index: index, images: images });
    }
  }

  initGallery() {
    var imageIndex = 0,
      images = document.getElementsByClassName("image-container"),
      index = [];

    // Creates index view
    var indexContainer = document.getElementById("index-container");
    for (var i = 0; i < images.length; i++) {
      var indexElement = document.createElement("span");
      indexElement.classList.add("index");
      indexContainer.append(indexElement);
      indexElement.setAttribute("onclick", "setSlide(" + i + ")");
      index.push(indexElement);
    }
    index[imageIndex].classList.add("active");

    // Hides index view if there is only 1 image
    if (images.length < 2) {
      var nextPrevBtns = document.querySelectorAll(
        ".ctrler--left, .ctrler--right"
      );
      for (i = 0; i < nextPrevBtns.length; i++) {
        nextPrevBtns[i].style.display = "none";
      }
      indexContainer.style.display = "none";
    }

    this.setState({ imageIndex: imageIndex, images: images, index: index });
  }

  returnImages(images) {
    var carouselImages;

    // Returns multiple image elements if there are more than one image
    if (images.length > 1) {
      carouselImages = images.map((value, index) => {
        <div className="image-container" key={index + 1}>
          <img src={value.src} />
        </div>;
      });
      // Returns one image element if there is only one image
    } else {
      carouselImages = (
        <div className="image-container">
          <img src={value.src} />
        </div>
      );
    }
    return carouselImages;
  }

  componentDidMount() {
    this.initGallery();
  }

  render() {
    const carouselImages = this.returnImages(this.props.images);
    return (
      <div className="carousel-container">
        <div className="carousel">
          <div onClick={this.moveSlidesBy(-1)} class="ctrler ctrler--left">
            <span class="arrow arrow--left"></span>
          </div>
          <div onClick={this.moveSlidesBy(1)} class="ctrler ctrler--right">
            <span class="arrow arrow--right"></span>
          </div>
          {carouselImages}
          <div id="index-container">{this.state.index}</div>
        </div>
      </div>
    );
  }
}
