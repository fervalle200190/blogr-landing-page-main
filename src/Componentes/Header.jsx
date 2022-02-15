import React from "react";
import HeaderCenter from "./HeaderCenter";
import NavContainer from "./NavContainer";

export default function Header() {
     return (
          <>
               <header className="header-container">
                    <div className="to-fix">
                         <NavContainer />
                         <HeaderCenter />
                    </div>
               </header>
          </>
     );
}
