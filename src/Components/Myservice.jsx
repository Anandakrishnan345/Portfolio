import React from "react";
function Myservice(){
    return(
    <section className="services" id="skills">
    <h2 className="heading">Skills</h2>
    <div className="services-container">
      <div className="service-box">
        <div className="service-info">
          <h4>Frontend development</h4>
          <p>
          I specialize in building responsive and interactive user interfaces using React.js. Additionally, I am well-versed in modern CSS frameworks such as Bootstrap and Tailwind CSS, enabling me to create visually stunning and intuitive user experiences..
          </p>
        </div>
      </div>

      <div className="service-box">
        <div className="service-info">
          <h4>Backend development</h4>
          <p>
          I'm skilled in building RESTful APIs and server-side applications using Node.js and Express.js. I have knowledge  in database design and management using MongoDB, including schema design, indexing, and performance optimization.
          </p>
        </div>
      </div>

      <div className="service-box">
        <div className="service-info">
          <h4>MERN stack Development</h4>
          <p>
                
            Skilled in frontend and backend technologies, I architect and deliver end-to-end solutions, specializing in MERN stack development. I oversee the entire development lifecycle, ensuring smooth integration and peak performance. Thriving in collaborative environments, I actively engage with cross-functional teams to drive projects to successful outcomes.
          </p>
        </div>
      </div>


    </div>
  </section>
  );
}
export default Myservice