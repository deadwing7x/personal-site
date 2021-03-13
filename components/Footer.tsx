import { CSSProperties } from "react";
import { FaHeart } from "react-icons/fa";

const Footer: React.FC<{}> = () => {
  const date: Date = new Date();
  const year = date.getFullYear();

  const heartStyle: CSSProperties = {
    display: "initial",
    color: "red",
  };

  return (
    <div className="mt-10 pb-5 text-center text-gray-50">
      <div className="copyright-text">
        Copyright © {year}
        <p>
          Designed with <FaHeart style={heartStyle} /> by Anubhav
        </p>
      </div>
    </div>
  );
};

export default Footer;
