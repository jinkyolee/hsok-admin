import React from "react";
import { Link } from "react-router-dom";
import "../../css/components/Request.css";

class Request extends React.Component {
  state = {
    answered: null,
  };

  render() {
    if (this.props.from === "/answered-requests") {
      return (
        <Link to="/answer-detail" className="request request--answered">
          <span className="request__descrip request__descrip--answered">
            {this.props.description}
          </span>
          <img
            src={this.props.image}
            className="request__image"
            alt={this.props.description}
            // onMouseOver={this.handleEnter}
          />
        </Link>
      );
    } else if (this.props.from === "/new-requests") {
      return (
        <Link to="/request-detail" className="request request--new">
          <span className="request__descrip request__descrip--new">
            {this.props.description}
          </span>
          <img
            src={this.props.image}
            className="request__image"
            alt={this.props.description}
            // onMouseOver={this.handleEnter}
          />
        </Link>
      );
    }
  }
}

export default Request;
