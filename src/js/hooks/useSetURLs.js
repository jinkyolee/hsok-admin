import { useState, useEffect } from "react";
import usePrevState from "./usePrevState";

const useSetURLs = (pathname) => {
  const [location, setLocation] = useState(pathname);

  useEffect(() => {
    setLocation(pathname);
  }, [pathname]);

  let prevLocation = usePrevState(location);

  return { location, prevLocation };
};

export default useSetURLs;
