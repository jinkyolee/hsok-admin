import { useState, useEffect } from "react";
import usePrevState from "./usePrevState";

const useSetURLs = (pathname) => {
  const [location, setLocation] = useState(pathname);
  let prevLocation;

  useEffect(() => {
    console.log("Setting Current URL...");
    setLocation(pathname);
  }, []);

  prevLocation = usePrevState(location);

  return { location, prevLocation, setLocation };
};

export default useSetURLs;
