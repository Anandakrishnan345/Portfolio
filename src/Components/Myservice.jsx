import React from "react";
import Mymongodbicon from "./Mymongodbicon";
import Myexpressicon from "./Myexpressicon";
import Myreactjsicon from "./Myreactjsicon";
import Mynodejsicon from "./Mynodejsicon";
import Mybootstrapicon from "./Mybootstrapicon";
import Mytailwindcssicon from "./Mytailwindcssicon";

function Myservice(){
    return(


  <section className="services " id="skills">
          <h2 className="heading  font-bold text-white mb-8 sm:mb-10 sm:text-9xl text-8xl">Skills</h2>
          <div className="services-container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
           
           

            <div className="service-box rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer  text-center ">
           <div className="flex  justify-center"> <Mymongodbicon size={250}  /> </div> 
            <div className="text-center font-bold text-base text-xl p-4"> MongoDB </div>
              {/* <div className="service-info p-6 sm:p-1">
                
              </div> */}
            </div>

            <div className="service-box rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer  text-center ">
           <div className="flex  justify-center"> <Myexpressicon size={250}  /> </div> 
            <div className="text-center font-bold text-base text-xl"> Express js </div>
              {/* <div className="service-info p-6 sm:p-1">
                
              </div> */}
            </div>

            <div className="service-box rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer  text-center ">
           <div className="flex  justify-center"> <Myreactjsicon size={250}  /> </div> 
            <div className="text-center font-bold p-4 text-base text-xl"> React js </div>
              {/* <div className="service-info p-6 sm:p-1">
                
            //   </div> */}
             </div>

   

            <div className="service-box rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer  text-center ">
           <div className="flex  justify-center"> <Mynodejsicon size={250}  /> </div> 
            <div className="text-center font-bold p-4 text-base text-xl"> Node js </div>
              {/* <div className="service-info p-6 sm:p-1">
                
              </div> */}
            </div>

            <div className="service-box rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer  text-center ">
           <div className="flex  justify-center p-2"> <Mybootstrapicon size={250}  /> </div> 
            <div className="text-center p-2 font-bold text-xl"> Bootstrap </div>
              {/* <div className="service-info p-6 sm:p-1">
                
              </div> */}
            </div>

            <div className="service-box rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer  text-center ">
           <div className="flex  justify-center"> <Mytailwindcssicon size={250}  /> </div> 
            <div className="text-center font-bold text-xl"> TailwindCss </div>
              {/* <div className="service-info p-6 sm:p-1">
                
              </div> */}
            </div>
      
      
          </div>
        </section>
  );
}
export default Myservice