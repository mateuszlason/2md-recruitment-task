import React from "react";
import FooterColumn from "./FooterColumn";
import Socials from "./Socials";
import Time from "./Time";
const Footer = () => {
  return (
    <footer className="bg-blue-500 h-1/5 xl:w-full w-2/3 lg:flex lg:flex-col grid grid-cols-5 text-white">
      <div className="md:text-center md:flex-col md:items-center col-span-3 flex flex-row flex-wrap justify-around mt-10 mb-6 text-sm">
        <FooterColumn headerText={"ABOUT ME"}>
          <p>
            As a fresh graduate and a super-curious person I really want to land
            that job.
          </p>
        </FooterColumn>
        <FooterColumn headerText={"DATE"}>
          <Time />
        </FooterColumn>
        <FooterColumn headerText={"CONTACT"}>
          <p>
            Phone number: <a href="tel:509647908">509647908</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:mat.lason@outlook.com">mat.lason@outlook.com</a>
          </p>
        </FooterColumn>
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;
