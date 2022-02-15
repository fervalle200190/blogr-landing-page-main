import React, { useRef, useEffect, useState } from "react";
import MenuChangeable from "./MenuChangeable";
import NavButtons from "./NavButtons";

export default function MenuOptions({ activo }) {
     const [size, setSize] = useState(window.innerWidth);
     const bigCont = useRef();
     const handleShow = (e) => {
          if (size < 900) {
               const data = document.querySelectorAll("[data-hide]");
               const flecha = document.querySelectorAll(".rotar");
               if (data.length === 0) {
                    e.target.nextElementSibling.classList.toggle("to-toggle");
                    e.target.firstElementChild.classList.toggle("rotar");
                    e.target.nextElementSibling.setAttribute(
                         "data-hide",
                         "true"
                    );
               } else {
                    data.forEach((el) => {
                         if (el !== e.target.nextElementSibling) {
                              el.classList.remove("to-toggle");
                              el.removeAttribute("to-toggle");
                         }
                    });
                    flecha.forEach((el) => {
                         if (el !== e.target.firstElementChild) {
                              el.classList.remove("rotar");
                         }
                    });
                    e.target.nextElementSibling.classList.toggle("to-toggle");
                    e.target.firstElementChild.classList.toggle("rotar");
                    e.target.nextElementSibling.setAttribute(
                         "data-hide",
                         "true"
                    );
               }
          }
     };
     useEffect(() => {
          window.addEventListener("resize", () => {
               setSize(window.innerWidth);
          });
     }, []);
     useEffect(() => {
          if (activo) {
               bigCont.current.classList.add("to-fade");
               document.body.style.overflow = "hidden";
          } else {
               bigCont.current.classList.remove("to-fade");
               document.body.style.overflow = "auto";
          }
     }, [activo]);
     return (
          <>
               <div className="menu-options">
                    <div className="shadow">
                         <div className="options-cont" ref={bigCont}>
                              <MenuChangeable
                                   title={"Product"}
                                   helpers={[
                                        "Overview",
                                        "Pricing",
                                        "Marketplace",
                                        "Features",
                                        "Integrations",
                                   ]}
                                   clase={[
                                        "menu-options-li",
                                        "ul-menu",
                                        "titles-menu",
                                        "menu-arrow",
                                        "menu-list",
                                   ]}
                                   manejar={handleShow}
                              />
                              <MenuChangeable
                                   title={"Company"}
                                   helpers={[
                                        "About",
                                        "Team",
                                        "Blog",
                                        "Careers",
                                   ]}
                                   clase={[
                                        "menu-options-li",
                                        "ul-menu",
                                        "titles-menu",
                                        "menu-arrow",
                                        "menu-list",
                                   ]}
                                   manejar={handleShow}
                              />
                              <MenuChangeable
                                   title={"Connect"}
                                   helpers={[
                                        "Contact",
                                        "Newsletter",
                                        "LinkedIn",
                                   ]}
                                   clase={[
                                        "menu-options-li",
                                        "ul-menu",
                                        "titles-menu",
                                        "menu-arrow",
                                        "menu-list",
                                   ]}
                                   manejar={handleShow}
                              />
                              <div className="second-cont-menu mobile">
                                   <hr />
                                   <div className="btn-nav-cont">
                                        <NavButtons
                                             clase={[
                                                  "nav-buttons mobile",
                                                  "nav-buttons mobile",
                                             ]}
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
