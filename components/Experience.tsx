import { useEffect, useState } from "react";
import styles from "../styles/Experience.module.css";
import DesktopView from "./Experience/DesktopView";
import MobileView from "./Experience/MobileView";

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
};

const Experience: React.FC<{}> = () => {
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

  return (
    <>
      {isMobile ? (
        <section id="experience" className={styles.sectionTimeline}>
          <p
            className={`pt-10 text-gray-50 text-5xl pb-4 mb-4 ${styles.experienceText}`}
          >
            <span
              className={`lg:text-3xl sm:text-xl ${styles.number}`}
              style={{ color: "#1ee0e0" }}
            >
              04.
            </span>{" "}
            Work Experience
          </p>
          <MobileView />
        </section>
      ) : (
        <section
          className={`lg:mt-20 lg:ml-24 lg:mr-24 sm:ml-20 sm:mr-16 sm:mt-14 ${styles.experienceDiv}`}
          id="experience"
        >
          <p
            className={`pt-10 text-gray-50 text-5xl pb-4 ${styles.experienceText}`}
          >
            <span
              className={`lg:text-3xl sm:text-xl ${styles.number}`}
              style={{ color: "#1ee0e0" }}
            >
              04.
            </span>{" "}
            Work Experience
          </p>
          <DesktopView />
        </section>
      )}
    </>
  );
};

export default Experience;
