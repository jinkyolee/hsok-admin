import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./js/routes/Home";
import NewRequests from "./js/routes/NewRequests";
import AnsweredReqs from "./js/routes/AnsweredRequests";
import RequestDetail from "./js/routes/RequestDetail";
import AnswerDetail from "./js/routes/AnswerDetail";
import AnswerPage from "./js/routes/AnswerPage";
import SignUpPage from "./js/routes/SignUpPage";
import NoMatch from "./js/routes/NoMatch";
import LoginPage from "./js/routes/LoginPage";
import ScrollToTop from "./js/components/ScrollToTop";

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

const guestRoutes = (loginCallback) => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route
        path="/login"
        exact
        component={LoginPage}
        loginCallback={loginCallback}
      />
      <Route path="/signup" component={SignUpPage} />
      <Route path="*">
        <Redirect to={{ pathname: "/login" }} />
      </Route>
    </Switch>
  );
};

const App = () => {
  const [loginStat, setLoginStat] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>{loginStat ? authRoutes : guestRoutes(setLoginStat)}</Switch>
    </BrowserRouter>
  );
};

export default App;
