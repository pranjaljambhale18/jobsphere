import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"} style={{ backgroundColor: '#FFA500', color: '#fff' }}>
      <div>&copy; All Rights Reserved By PJams.</div>
      <div>
        <Link to={"Facebook link"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"youtube link"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"youtube link"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"instagram link"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
