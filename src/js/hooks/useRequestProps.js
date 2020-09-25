// Personal hooks for setting request props
import { useState, useEffect } from "react";

// answerState: null,
// nextURL: null,

// if (this.props.from === "/answered-requests") {
//   this.setState({ answerState: "answered", nextURL: "/answer-detail" });
// } else {
//   this.setState({ answerState: "new", nextURL: "/answer-request" });
// }

const useRequestProps = (props) => {
  const { from } = props;
  const [answerState, setAnswerState] = useState();
  const [nextURL, setNextURL] = useState();

  useEffect(() => {
    if (from === "/answered-requests") {
      setAnswerState("answered");
      setNextURL("/answer-detail");
    } else {
      setAnswerState("new");
      setNextURL("/request-detail");
    }
  }, [from]);

  return { answerState, nextURL };
};

export default useRequestProps;
