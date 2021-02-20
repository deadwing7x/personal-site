import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <section
      className={`mt-20 ml-24 mr-24 ${styles.contactMeDiv}`}
      id="contactme"
    >
      <p className={`pt-10 text-gray-50 text-5xl pb-4 ${styles.contactMeText}`}>
        <span className="text-3xl" style={{ color: "#1ee0e0" }}>
          03.
        </span>{" "}
        Contact Me
      </p>
    </section>
  );
};

export default ContactMe;
