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

const returnClientData = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "successToken") {
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
    }, 2000);
  });
};

export default returnClientData;