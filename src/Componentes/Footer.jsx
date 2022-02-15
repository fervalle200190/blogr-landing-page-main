import React from "react";
import Logo from "../images/logo.svg";
import LastOptions from "./LastOptions";

export default function Footer() {
     return (
          <>
               <footer className="footer-container">
                    <div className="last-logo-container">
                         <img src={Logo} alt="logo" className="last-logo" />
                    </div>
                    <LastOptions
                         title={"Product"}
                         helpers={[
                              "Overview",
                              "Pricing",
                              "Marketplace",
                              "Features",
                              "Integrations",
                         ]}
                         clase={[
                              "last-options",
                              "last-ul",
                              "last-titles",
                              "last-list",
                         ]}
                    />
                     <LastOptions
                         title={"Company"}
                         helpers={[
                              "About",
                              "Team",
                              "Blogs",
                              "Careers",
                         ]}
                         clase={[
                              "last-options",
                              "last-ul",
                              "last-titles",
                              "last-list",
                         ]}
                    />
                     <LastOptions
                         title={"Connect"}
                         helpers={[
                              "Contact",
                              "Newsletter",
                              "Marketplace",
                              "LinkedIn",
                         ]}
                         clase={[
                              "last-options",
                              "last-ul",
                              "last-titles",
                              "last-list",
                         ]}
                    />
               </footer>
          </>
     );
}
