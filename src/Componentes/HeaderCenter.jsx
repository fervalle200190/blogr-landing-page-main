import React from "react";
import HeaderButtons from "./HeaderButtons";

export default function HeaderCenter() {
     return (
          <>
               <div className="header-center">
                    <h1 className="main-title">
                         A modern <br className="mobile" /> publishing platform
                    </h1>
                    <p className="main-description">
                         Grow your audience and build your{" "}
                         <br className="mobile" /> online brand
                    </p>
                    <HeaderButtons />
               </div>
          </>
     );
}
