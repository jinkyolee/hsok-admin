import React from "react";
import Request from "../components/Request";
import image1 from "../../images/hanbok1.jpeg";
import image2 from "../../images/hanbok2.jpeg";
import image3 from "../../images/hanbok3.jpeg";
import image4 from "../../images/hanbok4.jpeg";
import "../../css/routes/RequestPage.css";

const images = [
  { src: image1, description: "한복 1" },
  { src: image2, description: "한복 2" },
  { src: image3, description: "한복 3" },
  { src: image4, description: "한복 4" },
];

class NewRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      // url: this.props.location.pathname,
    };
  }

  render() {
    console.log(this.props);

    return (
      <div className="requests-container">
        <Request
          key={1}
          id={1}
          description={"소리 없는 방구"}
          images={images}
          // from={this.state.url}
          from={"/new-requests"}
        />
        <Request
          key={2}
          id={2}
          description={"훈이 없는 짱구"}
          images={images}
          // from={this.state.url}
          from={"/new-requests"}
        />
        <Request
          key={3}
          id={3}
          description={"이곳은 소라게 도시"}
          images={images}
          // from={this.state.url}
          from={"/new-requests"}
        />
        <Request
          key={4}
          id={4}
          description={"이곳은 소락의 도시"}
          images={images}
          // from={this.state.url}
          from={"/new-requests"}
        />
      </div>
    );
  }
}

export default NewRequests;
