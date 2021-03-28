import styles from "../../styles/Experience.module.css";

const MobileView: React.FC<{}> = () => {
  return (
    <>
      <div className="lg:pl-10 pt-10 pb-10 sm:pl-0">
        <p className={`text-gray-50 lg:text-3xl sm:text-2xl ${styles.company}`}>
          Company:{" "}
          <a
            href="https://maqsoftware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 hover:text-blue-300"
          >
            MAQ Software
          </a>
        </p>
      </div>
      <p className={styles.years}>
        <div>
          <p className="text-2xl">2021</p>
          <p className="lg:pt-5 lg:text-lg sm:pt-2 sm:text-sm">
            <strong className={styles.projectText}>Client Project: </strong>
            Worked closely with other developers, to develop new features on a
            web app according to requirements of the client. Wrote well tested
            code in C# with ASP.NET for backend development and JavaScript with
            jQuery for frontend development along with Razor framework from
            Microsoft. Also worked on fixing bugs and resolving incidents in the
            production environment.
          </p>
        </div>
      </p>
      <p className={styles.years}>
        <div>
          <p className="text-2xl">2020</p>
          <ul
            className={`lg:pt-5 lg:text-lg sm:pt-2 sm:text-sm ${styles.expList}`}
          >
            <li>
              <p>
                <strong className={styles.projectText}>
                  Internal Project:{" "}
                </strong>
                Developed a web app from scratch using ASP.NET Core using C# for
                backend development and Angular 2+ (TypeScript) for the
                front-end. The app was secured with Azure Active Directory
                authentication allowing only users within the organization
                access to the Portal. The portal is used daily by many users in
                the organization.
              </p>
            </li>
            <li>
              <p>
                <strong className={styles.projectText}>Client Project: </strong>
                Implemented a custom people - picker component, with add and
                delete functionalities on a Dynamics 365 portal using
                JavaScript, which allows the authenticated user to search for
                other users in his organization. The component authenticated the
                users on the basis of the MSAL library provided by Microsoft.
              </p>
            </li>
            <li>
              <p>
                <strong className={styles.projectText}>Client Project: </strong>
                Worked closely with other developers to develop new features on
                a web app according to the requirements provided by the client.
                Performed unit testing on all the C# code that was developed by
                me, to provide clean and tested features. The web app uses
                ASP.NET Framework with C# for the backend and CSHTML and
                JavaScript for the front-end. Also racked up some experience of
                working with Azure Cosmos DB while working on the project.
              </p>
            </li>
          </ul>
        </div>
      </p>
      <p className={styles.years}>
        <div>
          <p className="text-2xl">2019</p>
          <p className="lg:pt-5 lg:text-lg sm:pt-2 sm:text-sm">
            <strong className={styles.projectText}>Client Project: </strong>
            Collaborated with other developers to develop new features according
            to client requirements. Wrote well-tested code in C# and Angular JS
            for an ASP.NET Framwork Web App.
          </p>
        </div>
      </p>
    </>
  );
};

export default MobileView;
