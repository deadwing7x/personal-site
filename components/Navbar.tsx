import styles from "../styles/Navbar.module.css";

const Navbar: React.FC<{}> = () => {
  return (
    <nav className={`pt-6 ${styles.header}`}>
      <div tabIndex={-1} className={styles.logo}>
        <a className="text-xl text-gray-50" href="/" aria-label="Home">
          Home
        </a>
      </div>
      <div className={styles.navlinks_div}>
        <ol className={`text-gray-50 ${styles.nav_links}`}>
          <li className="mx-6">
            <a className={styles.li_text} href="#about">
              About
            </a>
          </li>
          <li className="mx-6">
            <a className={styles.li_text} href="#projects">
              Projects
            </a>
          </li>
          <li className="mx-6">
            <a className={styles.li_text} href="#contact">
              Contact
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
