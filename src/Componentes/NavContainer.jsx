import React, { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import MenuBurger from "./MenuBurger";
import MenuOptions from "./MenuOptions";
import NavButtons from "./NavButtons";

export default function NavContainer() {
     const [size, setSize] = useState(window.innerWidth);
     const [active, setActive] = useState(false);
     useEffect(() => {
          window.addEventListener("resize", () => {
               setSize(window.innerWidth);
          });
     }, []);
     const handler = () => {
          setActive(active ? false : true);
     };
     return (
          <>
               <nav className="nav-container">
                    <div className="nav-flex">
                         <img src={Logo} alt="logo" className="logo" />
                         <MenuOptions change={size} activo={active} />
                    </div>
                    <div className="btn-nav-container-desktop">
                         <NavButtons
                              clase={[
                                   "nav-button-red desktop",
                                   "nav-button-white desktop",
                              ]}
                         />
                    </div>
                    <MenuBurger changer={handler} />
               </nav>
          </>
     );
}
