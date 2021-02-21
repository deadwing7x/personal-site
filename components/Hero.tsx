import { useContext } from "react";
import UserContext from "../context/UserContext";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const user: any = useContext(UserContext);

  return (
    <section className={`lg:ml-24 lg:mr-20 lg:mt-16 sm:ml-20 sm:mr-16 sm:mt-14 ${styles.grid}`}>
      <div className={styles.leftContainer}>
        <p className={`text-2xl sm:text-xl sm:pt-8 ${styles.welcomeText}`}>Welcome I'm</p>
        <p className="lg:pt-6 text-8xl text-gray-50 font-extrabold w-40 sm:pt-4 sm:text-4xl w-max">
          {user?.users?.name}
        </p>
        <p className={`pt-6 w-full ${styles.description}`}>
          {user?.users?.bio}
        </p>
        <a href="mailto:anubhavsarkar7@gmail.com" className={`mt-8 ${styles.email_link}`}>Get In Touch</a>
      </div>
      <div className={styles.rightContainer}>
          <div className={styles.styledPic}>
              <div className={styles.wrapper}>
                  <img width="300" height="300" src={user?.users?.avatar_url} alt='profile-pic' className={styles.img} />
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
