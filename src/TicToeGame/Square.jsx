import React, { useState } from "react";



const Square = ( {onclick , value} ) => {

  
   


    return(
        <div className="border-2 border-black p-8 w-8" onClick={onclick}>
         <span className=" text-green-500 font-bold text-2xl">{value}</span> 
        </div>
    )
}

export default Square;