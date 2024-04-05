function Myservice() {
    return (
      <>
      <section className=" text-black py-8 sm:py-12 services" id="skills ">
        <h2 className="text-4xl font-bold text-white mb-8 sm:mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          <div className="bg-blue-500 rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <div className="p-6 sm:p-10">
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Frontend Development</h4>
              <p className="text-base sm:text-lg">I specialize in building responsive and interactive user interfaces using React.js. Additionally, I am well-versed in modern CSS frameworks such as Bootstrap and Tailwind CSS, enabling me to create visually stunning and intuitive user experiences.</p>
            </div>
          </div>
  
          <div className="bg-blue-500 rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <div className="p-6 sm:p-10">
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Backend Development</h4>
              <p className="text-base sm:text-lg">I'm skilled in building RESTful APIs and server-side applications using Node.js and Express.js. I have knowledge in database design and management using MongoDB, including schema design, indexing, and performance optimization.</p>
            </div>
          </div>
  
          <div className="bg-blue-500 rounded-lg border-4 border-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <div className="p-6 sm:p-10">
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">MERN Stack Development</h4>
              <p className="text-base sm:text-lg">Skilled in frontend and backend technologies, I architect and deliver end-to-end solutions, specializing in MERN stack development. I oversee the entire development lifecycle, ensuring smooth integration and peak performance. Thriving in collaborative environments, I actively engage with cross-functional teams to drive projects to successful outcomes.</p>
            </div>
          </div>
        </div>
      </section>
  
  
  
          <section className="services  sm:py-12" id="skills">
          <h2 className="heading lg:text-9xl md:text-7xl font-bold text-white mb-8 sm:mb-10">Skills</h2>
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
                <p className="text-base sm:text-lg">
                      
                  Skilled in frontend and backend technologies, I architect and deliver end-to-end solutions, specializing in MERN stack development. I oversee the entire development lifecycle, ensuring smooth integration and peak performance. Thriving in collaborative environments, I actively engage with cross-functional teams to drive projects to successful outcomes.
                </p>
              </div>
            </div>
      
      
          </div>
        </section>
        </>
      
  
    );
  }
  
  export default Myservice;