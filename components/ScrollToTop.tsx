import React, { useEffect, useState } from "react";
import styles from "../styles/Scroll.module.css";
import { BsChevronDoubleUp } from "react-icons/bs";

const ScrollToTop: React.FC<{}> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="flex justify-end">
      {isVisible && (
        <div className={`${styles.scroll_to_top}`} onClick={scrollToTop}>
          <BsChevronDoubleUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
