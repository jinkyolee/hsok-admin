import React from "react";
import Request from "../components/Request";
import image1 from "../../images/hanbok1.jpeg";
import image2 from "../../images/hanbok2.jpeg";
import image3 from "../../images/hanbok3.jpeg";
import image4 from "../../images/hanbok4.jpeg";
import "../../css/routes/RequestPage.css";

class NewRequests extends React.Component {
  state = {
    requests: [],
    url: this.props.location.pathname,
  };

  render() {
    return (
      <div className="requests-container">
        <Request
          key={1}
          id={1}
          description={"소리 없는 방구"}
          image={image1}
          from={this.state.url}
        />
        <Request
          key={2}
          id={2}
          description={"훈이 없는 짱구"}
          image={image2}
          from={this.state.url}
        />
        <Request
          key={3}
          id={3}
          description={"이곳은 소라게 도시"}
          image={image3}
          from={this.state.url}
        />
        <Request
          key={4}
          id={4}
          description={"이곳은 소락의 도시"}
          image={image4}
          from={this.state.url}
        />
      </div>
    );
  }
}

export default NewRequests;