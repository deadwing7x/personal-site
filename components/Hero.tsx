import { useContext } from "react";
import UserContext from "../context/UserContext";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const user: any = useContext(UserContext);

  return (
    <section className={`ml-24 mr-20 mt-16 ${styles.grid}`}>
      <div className={styles.leftContainer}>
        <p className={`text-2xl ${styles.welcomeText}`}>Welcome I'm</p>
        <p className="pt-6 text-8xl text-gray-50 font-extrabold w-40">
          {user?.users?.name}
        </p>
        <p className={`pt-6 w-12/12 ${styles.description}`}>
          Hi 👋, I am a full-stack developer based out of Mumbai, IN. I am
          currently focused on full-stack development using .NET with C# and
          React with TypeScript.
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
