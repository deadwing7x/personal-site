import React from "react";
import styles from "../styles/Playlist.module.css";

const Playlist: React.FC<{}> = () => {
  return (
      <section
        className={`lg:mt-20 lg:ml-24 lg:mr-24 sm:ml-20 sm:mr-16 sm:mt-14 ${styles.playlistContainer}`}
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/3xBPG8ROCwy86syh0edsd2?autoplay=1"
          className={`${styles.playlistFrame}`}
          frameBorder="0"
          loading="lazy"
          allow="encrypted-media"
        ></iframe>
      </section>
  );
};

export default Playlist;
