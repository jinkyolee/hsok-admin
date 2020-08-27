import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navigation from "./js/components/Navigation";
import Home from "./js/routes/Home";
import NewRequests from "./js/routes/NewRequests";
import AnsweredReqs from "./js/routes/AnsweredRequests";
import RequestDetail from "./js/routes/RequestDetail";
import AnswerDetail from "./js/routes/AnswerDetail";
import AnswerPage from "./js/routes/AnswerPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Navigation>
          <Route path="/" exact={true} component={Home} />
          <Route path="/new-requests" exact={true} component={NewRequests} />
          <Route
            path="/answered-requests"
            exact={true}
            component={AnsweredReqs}
          />
          <Route
            path="/request-detail"
            exact={true}
            component={RequestDetail}
          />
          <Route path="/answer-detail" exact={true} component={AnswerDetail} />
          <Route path="/answer-request" exact={true} component={AnswerPage} />
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
