import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="footer">
      <Link to={"/"}>Homepage</Link>
      <Link to={"/About"}>About</Link>
      ©Blogy 2022. Published by AbdurCode
    </footer>
  );
};

export default SiteFooter;
