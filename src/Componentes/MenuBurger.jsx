import React, { useRef } from "react";

export default function MenuBurger({ changer }) {
     const btn = useRef();
     const btnHandler = () => {
          btn.current.classList.toggle("is-active");
     };
     return (
          <>
               <div
                    className="menu-burger mobile"
                    onClick={() => {
                         changer();
                         btnHandler();
                    }}
               >
                    <button
                         className="hamburger hamburger--squeeze"
                         type="button"
                         ref={btn}
                    >
                         <span className="hamburger-box">
                              <span className="hamburger-inner"></span>
                         </span>
                    </button>
               </div>
          </>
     );
}
