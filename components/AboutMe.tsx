import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={`lg:mt-20 lg:ml-24 lg:mr-24 sm:ml-20 sm:mr-16 sm:mt-14 ${styles.aboutMeDiv}`} id="aboutme">
      <p className={`lg:pt-10 text-gray-50 lg:text-5xl pb-4 sm:text-3xl ${styles.aboutMeText}`}>
        <span className="lg:text-3xl sm:text-xl" style={{ color: "#1ee0e0" }}>
          01.
        </span>{" "}
        About Me
      </p>
      <p className="text-gray-50 pt-10 lg:text-xl sm:text-lg">Hi 👋, I'm Anubhav Sarkar.</p>
      <p className="text-gray-50 pt-4 lg:text-xl sm:text-lg">
        I am a full-stack developer based out of Mumbai, IN. I am currently
        focused on full-stack development using .NET with C# and React with
        TypeScript.
      </p>
      <p className="text-gray-50 pt-12 lg:text-3xl sm:text-xl">Connect with me:</p>
      <ol className={`mt-5 ${styles.socialMedia}`}>
        <li>
          <a
            href="https://www.linkedin.com/in/anubhav-sarkar-52965786/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/deadwing7x">
            <i
              className="fab fa-github fa-2x"
              title="deadwing7x's GitHub Profile"
            ></i>
          </a>
        </li>
        <li>
          <a href="https://dev.to/deadwing7x">
            <i
              className="fab fa-dev fa-2x"
              title="deadwing7x's DEV Community Profile"
            ></i>
          </a>
        </li>
      </ol>
      <p className="text-gray-50 pt-12 lg:text-3xl sm:text-xl">
        Some languages and tools that I use:
      </p>
      <ol className={`mt-5 ${styles.socialMedia}`}>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/" target="_blank">
            <img
              src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg"
              alt="nextjs"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://www.w3schools.com/cs/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              alt="csharp"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/html/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://www.w3schools.com/css/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://dotnet.microsoft.com/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
              alt="dotnet"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://azure.microsoft.com/en-in/" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
              alt="azure"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://git-scm.com/" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a href="https://www.microsoft.com/en-us/sql-server" target="_blank">
            <img
              src="https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg"
              alt="mssql"
              width="40"
              height="40"
            />
          </a>
        </li>
      </ol>
    </section>
  );
};

export default AboutMe;
