import { useState, useEffect } from "react";

const useSetNavType = () => {
  const screenSize = window.screen.width;
  const [tagType, setTagType] = useState("");

  useEffect(() => {
    if (screenSize > 840) {
      setTagType("span");
    } else if (screenSize < 840) {
      setTagType("link");
    }
  }, [screenSize]);

  return tagType;
};

export default useSetNavType;
