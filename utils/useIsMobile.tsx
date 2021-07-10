import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
};

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState<any>(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    if (windowDimensions.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return isMobile;
};

export default useIsMobile;
