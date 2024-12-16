import { useState } from 'react';

function Survey() {
   return(

    <>
    
<div className="text-center"> 
<img className=  "lg:w-4/6 lg:h-4/6 sm:w-4/6 sm:h-4/6 md:4/6 md:w-4/6  mx-auto py-10 "  src="/images/man-filling.png"/>
    <h3 className="text-blue-700 lg:text-3xl text-2xl font-bold px-6"> Let us know what you need at this stage of your Life </h3>
    <div className="flex justify-center my-14">
        <a href="/Question">
          <button className="bg-blue-700 text-white font-bold px-6 py-5 rounded-md hover:bg-blue-800 shadow-md animate-bounce">Start Survey</button>
        </a>
      </div>
    </div>


    </>
   ) 
}


export default Survey