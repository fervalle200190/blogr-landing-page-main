import React from "react";
import Phones from '../images/illustration-phones.svg'

export default function MiddleImage() {
     return (
          <>
               <div className="middle-image middle-img-cont">
                    <img src={Phones} alt="telefonos" className="middle-image" />
               </div>
          </>
     );
}
