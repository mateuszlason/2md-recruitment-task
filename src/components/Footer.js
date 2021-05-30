import React from "react";
import FooterColumn from "./FooterColumn";
import Socials from "./Socials";
import Date from "./Date";
const Footer = () => {
  return (
    <footer className="bg-blue-500 w-screen grid grid-cols-3 absolute bottom-0 text-white">
      <div className="col-span-2 flex flex-row">
        <FooterColumn headerText={"ABOUT ME"}>
          <p>This is text about myself.</p>
        </FooterColumn>
        <FooterColumn headerText={"DATE"}>
          <Date />
        </FooterColumn>
        <FooterColumn headerText={"CONTACT"}>
          <p>
            Phone number: <a href="tel:509647908">509647908</a>
          </p>
          <p>
            <a href="mailto:mat.lason@outlook.com">mat.lason@outlook.com</a>
          </p>
        </FooterColumn>
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;
