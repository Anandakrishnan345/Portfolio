import React from "react";

function Myservice(){
    return(
  //   <section className="services" id="skills">
  //   <h2 className="heading">Skills</h2>
  //   <div className="services-container">
  //     <div className="service-box">
  //       <div className="service-info">
  //         <h4>Frontend development</h4>
  //         <p>
  //         I specialize in building responsive and interactive user interfaces using React.js. Additionally, I am well-versed in modern CSS frameworks such as Bootstrap and Tailwind CSS, enabling me to create visually stunning and intuitive user experiences..
  //         </p>
  //       </div>
  //     </div>

  //     <div className="service-box">
  //       <div className="service-info">
  //         <h4>Backend development</h4>
  //         <p>
  //         I'm skilled in building RESTful APIs and server-side applications using Node.js and Express.js. I have knowledge  in database design and management using MongoDB, including schema design, indexing, and performance optimization.
  //         </p>
  //       </div>
  //     </div>

  //     <div className="service-box">
  //       <div className="service-info">
  //         <h4>MERN stack Development</h4>
  //         <p>
                
  //           Skilled in frontend and backend technologies, I architect and deliver end-to-end solutions, specializing in MERN stack development. I oversee the entire development lifecycle, ensuring smooth integration and peak performance. Thriving in collaborative environments, I actively engage with cross-functional teams to drive projects to successful outcomes.
  //         </p>
  //       </div>
  //     </div>


  //   </div>
  // </section>

  <section className="services " id="skills">
          <h2 className="heading  font-bold text-white mb-8 sm:mb-10">Skills</h2>
          <div className="services-container grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <div className="service-box rounded-lg  border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              <div className="service-info p-6 sm:p-1">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Frontend development</h4>
                <p className="text-base sm:text-sm">
                I specialize in building responsive and interactive user interfaces using React.js. Additionally, I am well-versed in modern CSS frameworks such as Bootstrap and Tailwind CSS, enabling me to create visually stunning and intuitive user experiences..
                </p>
              </div>
            </div>
      
            <div className="service-box rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer" >
              <div className="service-info p-6 sm:p-1">
                <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Backend development</h4>
                <p className="text-base sm:text-lg">
                I'm skilled in building RESTful APIs and server-side applications using Node.js and Express.js. I have knowledge  in database design and management using MongoDB, including schema design, indexing, and performance optimization.
                </p>
              </div>
            </div>
      
            <div className="service-box rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              <div className="service-info p-6 sm:p-1">
                <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">MERN stack Development</h4>
                <div className="text-lg sm:text-lg font-bold">
                      
                  Skilled in frontend and backend technologies, I architect and deliver end-to-end solutions, specializing in MERN stack development. I oversee the entire development lifecycle, ensuring smooth integration and peak performance. Thriving in collaborative environments, I actively engage with cross-functional teams to drive projects to successful outcomes.
                </div>
              </div>
            </div>
      
      
          </div>
        </section>
  );
}
export default Myservice