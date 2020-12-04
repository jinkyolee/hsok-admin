import { LOGIN_URL } from "./urls";
import { SIGNUP_URL } from "./urls";

// const setAppUser = (pk) => {
//   const localStorage = window.localStorage;
//   const appUser = localStorage.getItem("app_user");
//   const currentTime = Date.now();

//   if (!appUser) {
//     localStorage.setItem(
//       "app_user",
//       JSON.stringify({
//         access_time: currentTime,
//         user_pk: pk,
//       })
//     );
//   } else {
//     const userData = JSON.parse(localStorage.app_user);
//     localStorage.clear();
//     if (currentTime - userData.access_time < 21600000) {
//       userData.access_time = currentTime;
//       localStorage.setItem("app_user", JSON.stringify(userData));
//     } else {
//       localStorage.clear();
//     }
//   }
// };

export const handleLogin = async (username, phoneNum, setLogin) => {
  if (username && phoneNum) {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({
        store_name: username,
        phone_num: phoneNum,
      }),
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      redirect: "follow",
    }).then((response) => response.clone().json());

    setLogin(response);
  }
};

export const handleSignUp = async (username, phoneNum) => {
  if (username && phoneNum) {
    const response = await fetch(SIGNUP_URL, {
      method: "POST",
      body: JSON.stringify({
        store_name: username,
        phone_num: phoneNum,
      }),
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      redirect: "follow",
    });

    response
      .then(() => {
        window.location.href = "./login";
      })
      .catch((err) => console.error(err));
  }
};
