import { REQUESTS_URL } from "./urls";
import image1 from "../../images/hanbok1.jpeg";
import image2 from "../../images/hanbok2.jpeg";
import image3 from "../../images/hanbok3.jpeg";
import image4 from "../../images/hanbok4.jpeg";

const images = [
  { src: image1, description: "한복 1" },
  { src: image2, description: "한복 2" },
  { src: image3, description: "한복 3" },
  { src: image4, description: "한복 4" },
];

export const sendDetailData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { description: "재밌어 구름 놀이, 뜬 구름 잡는다고 해도", src: image1 },
        {
          description: "난 재밌어 이게 너네처럼 연기를 하고 싶지는 않아 clouds",
          src: image2,
        },
        {
          description: "뜬 구름s like 솜사탕 같아 뜬 구름s like 솜사탕 같아",
          src: image3,
        },
        {
          description: "연기 같아 연기 같아 연기 같아 내가 하고 있는 건",
          src: image4,
        },
      ]);
    }, 2000);
  });
};

export const sendRequestData = (token, type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === "empty") {
        resolve([]);
        console.log("Processing empty");
      } else {
        console.log("Processing unempty");
        if (token === "successToken") {
          console.log("Resolving");
          resolve([
            {
              description: "소리 없는 방구",
              images: images,
            },
            {
              description: "훈이 없는 짱구",
              images: images,
            },
            {
              description: "이곳은 소라게 도시",
              images: images,
            },
            {
              description: "이곳은 소락의 도시",
              images: images,
            },
          ]);
        } else {
          reject("토큰이 일치하지 않습니다");
        }
      }
    }, 2000);
  });
};

export const fetchRequests = (state, pk) => {
  // const resp = await fetch(REQUESTS_URL(state, pk), {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Origin: "http://localhost:3000",
  //   },
  //   redirect: "follow",
  // });

  // const response = await resp.json();

  const response = fetch(REQUESTS_URL(state, pk), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:3000",
    },
    redirect: "follow",
  }).then((response) => response.clone().json());

  return response;
};
