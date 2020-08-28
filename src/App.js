import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navigation from "./js/components/Navigation";
import Home from "./js/routes/Home";
import NewRequests from "./js/routes/NewRequests";
import AnsweredReqs from "./js/routes/AnsweredRequests";
import RequestDetail from "./js/routes/RequestDetail";
import AnswerDetail from "./js/routes/AnswerDetail";
import AnswerPage from "./js/routes/AnswerPage";
import NoMatch from "./js/routes/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Navigation>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/new-requests" component={NewRequests} />
            <Route path="/answered-requests" component={AnsweredReqs} />
            <Route path="/request-detail" component={RequestDetail} />
            <Route path="/answer-detail" component={AnswerDetail} />
            <Route path="/answer-request" component={AnswerPage} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
