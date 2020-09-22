import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import useSetURLs from "./js/hooks/useSetURLs";
import Navigation from "./js/components/Navigation";
import Home from "./js/routes/Home";
import NewRequests from "./js/routes/NewRequests";
import AnsweredReqs from "./js/routes/AnsweredRequests";
import RequestDetail from "./js/routes/RequestDetail";
import AnswerDetail from "./js/routes/AnswerDetail";
import AnswerPage from "./js/routes/AnswerPage";
import LoginPage from "./js/routes/LoginPage";
import NoMatch from "./js/routes/NoMatch";

const authRoutes = (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/new-requests" component={NewRequests} />
    <Route path="/answered-requests" component={AnsweredReqs} />
    <Route path="/request-detail" component={RequestDetail} />
    <Route path="/answer-detail" component={AnswerDetail} />
    <Route path="/answer-request" component={AnswerPage} />
    <Route path="*" component={NoMatch} />
  </Switch>
);

const guestRoutes = (location, loginCallback) => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/users" component={LoginPage} />
      <Route path="*">
        <Redirect to={{ pathname: "/users", state: { referrer: location } }} />
      </Route>
    </Switch>
  );
};

const App = () => {
  const [loginStat, setLoginStat] = useState(false);
  let location = useSetURLs(window.location.pathname);

  return (
    <BrowserRouter>
      <Switch>
        <Navigation>
          {loginStat ? authRoutes : guestRoutes(location, setLoginStat)}
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
