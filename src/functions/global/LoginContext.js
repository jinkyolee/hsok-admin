import React, { useState } from "react";

const getUser = () => {
  const appUser = window.localStorage.getItem("app_user");
  if (appUser) {
    console.log("Finished setting login state to true");
    return true;
  } else {
    console.log("Finished setting login state to false");
    return false;
  }
};

export const LoginContext = React.createContext();

export const LoginProvider = ({ authChild, guestChild }) => {
  const initLoginState = getUser();
  const [loginState, setLoginState] = useState(initLoginState);
  const storage = window.localStorage;

  const setLogin = (loginData) => {
    storage.setItem("app_user", JSON.stringify({ user_pk: loginData }));
    setLoginState(true);
  };

  const setLogout = () => {
    storage.removeItem("app_user");
    setLoginState(false);
  };

  return (
    <LoginContext.Provider value={{ loginState, setLogin, setLogout }}>
      {loginState ? authChild : guestChild}
    </LoginContext.Provider>
  );
};
