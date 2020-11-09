import React from "react";
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
import { LoginProvider } from "./js/context/LoginContext";

const authRoutes = (
  <Switch>
    <Route path="/hsok-admin/" exact={true} component={Home} />
    <Route path="/hsok-admin/new-requests" component={NewRequests} />
    <Route path="/hsok-admin/answered-requests" component={AnsweredReqs} />
    <Route path="/hsok-admin/request-detail" component={RequestDetail} />
    <Route path="/hsok-admin/answer-detail" component={AnswerDetail} />
    <Route path="/hsok-admin/answer-request" component={AnswerPage} />
    <Route path="*" component={NoMatch} />
  </Switch>
);

const guestRoutes = (
  <Switch>
    <Route path="/hsok-admin/" exact={true} component={Home} />
    <Route path="/hsok-admin/login" exact>
      <LoginPage />
    </Route>
    <Route path="/hsok-admin/signup" component={SignUpPage} />
    <Route path="*">
      <Redirect to={{ pathname: "/hsok-admin/login" }} />
    </Route>
  </Switch>
);

const App = () => {
  // let {
  //   loginContext,
  //   LoginContext: { Provider },
  // } = useLoginContext();

  // useEffect(() => console.log(loginContext), [loginContext]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoginProvider authChild={authRoutes} guestChild={guestRoutes} />
    </BrowserRouter>
  );
};

export default App;
