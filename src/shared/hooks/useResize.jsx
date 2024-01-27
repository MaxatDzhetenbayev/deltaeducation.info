import { useEffect, useState } from "react";

export const useResize = (size) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isAdaptive = windowWidth < size;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [isAdaptive];
};
