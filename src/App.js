import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewRequests from "./pages/RequestPage/NewRequests";
import AnsweredReqs from "./pages/RequestPage/AnsweredRequests";
import RequestDetail from "./pages/RequestDetail/RequestDetail";
import AnswerDetail from "./pages/AnswerDetail";
import AnswerPage from "./pages/AnswerPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import NoMatch from "./pages/NoMatch";
import LoginPage from "./pages/AuthPage/LoginPage";
import ScrollToTop from "./components/atoms/ScrollToTop";
import { LoginProvider } from "./functions/global/LoginContext";

const authRoutes = (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/new-requests" component={NewRequests} />
    <Route path="/answered-requests" component={AnsweredReqs} />
    <Route path="/request-detail" component={RequestDetail} />
    <Route path="/answer-detail" component={AnswerDetail} />
    <Route path="/answer-request" component={AnswerPage} />
    <Route path="/login">
      <Redirect to="" />
    </Route>
    <Route path="*" component={NoMatch} />
  </Switch>
);

const guestRoutes = (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/login" exact>
      <LoginPage />
    </Route>
    <Route path="/signup" component={SignUpPage} />
    <Route path="*">
      <Redirect to={{ pathname: "/login" }} />
    </Route>
  </Switch>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoginProvider authChild={authRoutes} guestChild={guestRoutes} />
    </BrowserRouter>
  );
};

export default App;
