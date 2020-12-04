import { useState, useEffect } from "react";

const useSetNavType = () => {
  const screenSize = window.screen.width;
  const [type, setType] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (screenSize > 840) {
      setType("span");
      setTag("--mob");
    } else if (screenSize < 840) {
      setType("link");
      setTag("");
    }
  }, [screenSize]);

  return { type, tag };
};

export default useSetNavType;
