import React from "react";
import styles from "../styles/AboutMe.module.css";
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa";

const AboutMe: React.FC<{}> = () => {
  const languages: string[] = [
    "HTML & CSS",
    "JavaScript (ES6+)",
    "TypeScript",
    "C#",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Azure",
    "SQL Server",
    "Git",
  ];

  return (
    <section
      className={`lg:mt-20 lg:ml-24 lg:mr-24 sm:ml-20 sm:mr-16 sm:mt-14 ${styles.aboutMeDiv}`}
      id="aboutme"
    >
      <p
        className={`lg:pt-10 text-gray-50 lg:text-5xl pb-4 sm:text-3xl ${styles.aboutMeText}`}
      >
        <span
          className={`lg:text-3xl sm:text-xl ${styles.number}`}
          style={{ color: "#1ee0e0" }}
        >
          01.
        </span>{" "}
        About Me
      </p>
      <p className="text-gray-50 pt-10 lg:text-xl sm:text-lg">
        Hi 👋, I'm Anubhav Sarkar.
      </p>
      <p className="text-gray-50 pt-4 lg:text-xl sm:text-lg">
        I am a full-stack developer based out of Mumbai, IN. I am currently
        focused on full-stack development using .NET with C# and React with
        TypeScript.
      </p>
      <p className="text-gray-50 pt-12 lg:text-3xl sm:text-xl">
        Connect with me:
      </p>
      <ol className={`mt-5 ${styles.socialMedia}`}>
        <li>
          <a
            href="https://www.linkedin.com/in/anubhav-sarkar17/"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={styles.socialMediaIcons}
              title={"Anubhav Sarkar's LinkedIn profile"}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/deadwing7x" rel="noopener noreferrer">
            <FaGithub
              className={styles.socialMediaIcons}
              title={"deadwing7x's GitHub Profile"}
            />
          </a>
        </li>
        <li>
          <a href="https://dev.to/deadwing7x" rel="noopener noreferrer">
            <FaDev
              className={styles.socialMediaIcons}
              title={"deadwing7x's DEV Community Profile"}
            />
          </a>
        </li>
      </ol>
      <p className="text-gray-50 pt-12 pb-12 lg:text-3xl sm:text-xl">
        Grab a copy of my resume:
      </p>
      <a
        href="https://github.com/deadwing7x/personal-site/raw/main/public/Anubhav_Resume.pdf"
        download
        className={styles.resume_link}
      >
        Resume
      </a>
      <p className="text-gray-50 pt-12 lg:text-3xl sm:text-xl">
        Some languages and tools that I use:
      </p>
      <div
        className={`mt-5 grid lg:grid-cols-4 md:grid-cols-3 text-gray-50 lg:text-xl md:text-lg sm:text-md ${styles.languages}`}
      >
        {languages.map((item, i) => {
          return (
            <div key={i} className="w-max">
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutMe;
