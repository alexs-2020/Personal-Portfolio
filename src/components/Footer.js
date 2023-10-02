import React from "react";
import Github  from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a  href='https://github.com/alexs-2020' ><Github /></a>
        <a  href='https://www.linkedin.com/in/alex-smith-602434237/' ><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 axsmith2020@gmail.com</p>
    </div>
  );
}

export default Footer;