import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
};

const Navbar: React.FC<{}> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState<any>(
    getWindowDimensions()
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToComponent = (component: string) => {
    setIsOpen(!isOpen);

    document.getElementById(component)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const showNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    if (windowDimensions.width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return (
    <nav className={`pt-6 ${styles.header}`}>
      <div tabIndex={-1} className={styles.logo}>
        <a className="text-xl text-gray-50" href="/" aria-label="Home">
          Home
        </a>
      </div>
      {isMobile ? (
        <>
          <span role="button" className={styles.navButton} onClick={showNav}>
            <i
              className={isOpen ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}
            ></i>
          </span>
          {isOpen ? (
            <aside
              aria-hidden={isOpen}
              tabIndex={isOpen ? 1 : -1}
              className={styles.asideDiv}
            >
              <nav>
                <ol className={styles.navList}>
                  <li>
                    <a
                      className={styles.li_text}
                      onClick={() => scrollToComponent("aboutme")}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.li_text}
                      onClick={() => scrollToComponent("projects")}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.li_text}
                      onClick={() => scrollToComponent("experience")}
                    >
                      Work Experience
                    </a>
                  </li>
                </ol>
              </nav>
            </aside>
          ) : (
            ""
          )}
        </>
      ) : (
        <div className={`${styles.navlinks_div}`}>
          <ol className={`text-gray-50 ${styles.nav_links}`}>
            <li className="mx-6">
              <a
                className={styles.li_text}
                onClick={() => scrollToComponent("aboutme")}
              >
                About
              </a>
            </li>
            <li className="mx-6">
              <a
                className={styles.li_text}
                onClick={() => scrollToComponent("projects")}
              >
                Projects
              </a>
            </li>
            <li className="mx-6">
              <a
                className={styles.li_text}
                onClick={() => scrollToComponent("experience")}
              >
                Work Experience
              </a>
            </li>
          </ol>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
