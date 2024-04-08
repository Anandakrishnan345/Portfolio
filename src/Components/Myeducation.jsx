import React from "react";

function Myeducation() {
  return (
    <section className="education" id="education">
      <h2 className="heading font-bold sm:text-9xl text-8xl">Education</h2>

      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">2017-2019</div>
            <div className="timeline-content">
              <h3>High Secondary Education</h3>
              <p>
                At kerndriya vidyalaya,I.N.S Dronacharya,mundamveli,
                kochi-I pursued the stream of Computer Science. This period was instrumental in developing my foundational knowledge and skills in computer science and related disciplines.
              </p>
            </div>
          
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">2019-2023</div>
            <div className="timeline-content">
              <h3>University</h3>
              <p>
              Adi Shankara Institute of Engineering and Technology,Kalady,
              Ernakulam,Kerala. Affiliated with Kerala Technological University, played a pivotal role in my academic journey, providing exposure to the dynamic field of Electronics and Communication Engineering.
              </p>
            </div>
          
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>Internship</h3>
              <p>
               I undertook a specialized internship program at Synnefo Solutions, where I delved into the dynamic realm of web development using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
              </p>
            </div>
          
        </div>

       
      </div>
    </section>
  );
}

export default Myeducation;
