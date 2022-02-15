import React from "react";

export default function NavButtons({ clase }) {
     return (
          <>
               <button className={clase[0]}>Login</button>
               <button className={clase[1]}>Sign Up</button>
          </>
     );
}
