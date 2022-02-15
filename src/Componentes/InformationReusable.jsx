import React from "react";

export default function InformationReusable({ clase, titulo, detalles }) {
     return (
          <>
               <div className={clase[0]}>
                    {Array.isArray(titulo) ? (
                         <h4 className={clase[1]}>
                              {titulo[0]} <br className="mobile" /> {titulo[1]}
                         </h4>
                    ) : (
                         <h4 className={clase[1]}>{titulo}</h4>
                    )}
                    <p className={clase[2]}>{detalles}</p>
               </div>
          </>
     );
}
