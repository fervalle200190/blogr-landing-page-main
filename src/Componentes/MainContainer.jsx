import React from "react";
import LastInformation from "./LastInformation";
import MainImage from "./Main-image";
import MainInformation from "./MainInformation";
import MiddleInformation from "./MiddleInformation";
import TitleMain from "./TitleMain";

export default function MainContainer() {
     return (
          <>
               <main className="main-container">
                    <div className="flex-container">
                         <TitleMain />
                         <div className="second-flex-cont">
                              <MainInformation />
                              <MainImage />
                         </div>
                    </div>
                    <MiddleInformation />
                    <LastInformation />
               </main>
          </>
     );
}
