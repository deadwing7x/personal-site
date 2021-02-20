import React, { useEffect, useState } from "react";
import styles from "../styles/Scroll.module.css";

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
    <div className='flex justify-end'>
      {isVisible && (
        <div className={`${styles.scroll_to_top}`} onClick={scrollToTop}>
          <i className="text-gray-50 fas fa-arrow-alt-circle-up fa-2x"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
