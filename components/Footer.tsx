const Footer: React.FC<{}> = () => {
  const date: Date = new Date();
  const year = date.getFullYear();

  return (
    <div className="mt-10 pb-5 text-center text-gray-50">
      <div className="copyright-text">
        Copyright © {year}
        <p>
          Designed with <i className="fa fa-heart"></i> by Anubhav
        </p>
      </div>
    </div>
  );
};

export default Footer;
