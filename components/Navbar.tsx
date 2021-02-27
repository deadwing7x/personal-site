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

    document.getElementsByTagName("body")[0].classList.remove("stopScroll");

    document.getElementById(component)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const showNav = () => {
    let open: boolean = isOpen;

    if (!open) {
      document.getElementsByTagName("body")[0].classList.add("stopScroll");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("stopScroll");
    }

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

  const navOptions: { name: string; id: string }[] = [
    { name: "About", id: "aboutme" },
    { name: "Projects", id: "projects" },
    { name: "Blogs", id: "blogs" },
    { name: "Work Experience", id: "experience" },
  ];

  return (
    <nav id="navHeader" className={`pt-6 ${styles.header}`}>
      <div tabIndex={-1} className={styles.logo}>
        <a className="text-xl text-gray-50" href="/" aria-label="Home">
          Home
        </a>
      </div>
      {isMobile ? (
        <>
          <button role="button" className={styles.navButton} onClick={showNav}>
            <i
              className={isOpen ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}
            ></i>
          </button>
          {isOpen ? (
            <aside
              id="asideNav"
              aria-hidden={isOpen}
              tabIndex={isOpen ? 1 : -1}
              className={styles.asideDiv}
            >
              <nav>
                <ol className={styles.navList}>
                  {navOptions.map((nav, id) => {
                    return (
                      <li key={id}>
                        <a
                          className={styles.li_text}
                          onClick={() => scrollToComponent(nav.id)}
                        >
                          {nav.name}
                        </a>
                      </li>
                    );
                  })}
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
            {navOptions.map((nav, id) => {
              return (
                <li className="mx-6" key={id}>
                  <a
                    className={styles.li_text}
                    onClick={() => scrollToComponent(nav.id)}
                  >
                    {nav.name}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
