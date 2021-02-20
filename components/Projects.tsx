import { useContext } from "react";
import ReposContext from "../context/RepoContext";
import { IRepo } from "../models/IRepo";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const sortByLastUpdated = (a: Date, b: Date) => {
    return b.getTime() - a.getTime();
  };

  let repos: any = useContext(ReposContext);

  repos = repos.repos
    .sort((a: IRepo, b: IRepo) =>
      sortByLastUpdated(new Date(a.updated_at), new Date(b.updated_at))
    )
    .slice(0, 9);

  return (
    <section
      className={`mt-20 ml-24 mr-24 ${styles.projectsDiv}`}
      id="projects"
    >
      <p className={`pt-10 text-gray-50 text-5xl pb-4 ${styles.projectsText}`}>
        <span className="text-3xl" style={{ color: "#1ee0e0" }}>
          02.
        </span>{" "}
        Projects
      </p>
      <div className={`mt-10 ${styles.projectsList}`}>
        {repos.map((repo: IRepo) => {
          return (
            <div className={`${styles.card}`} key={repo.id}>
              <div className={styles.projectInner}>
                <header>
                  <div className={`${styles.projectTop}`}>
                    <div className="text-gray-50">
                      <i className="far fa-folder fa-2x"></i>
                    </div>
                    <div className={`text-gray-50 ${styles.projectLinks}`}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      {repo.homepage ? (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <a className={styles.projectTitle} href={repo.html_url}>
                    {repo.name}
                  </a>
                  <p className={styles.projectDescription}>
                    {repo.description}
                  </p>
                </header>
                <footer className={`pt-4 text-gray-50 ${styles.footer}`}>
                  <p>{repo.language}</p>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-14 text-center">
        <a
          className={styles.showMoreButton}
          href="https://github.com/deadwing7x?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show More
        </a>
      </div>
    </section>
  );
};
export default Projects;
