import React from 'react';


function Myhome() {
  return (
    <>
    
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Anandan</span></h1>
        <h3 className="text-animation"> 
            I'm a <span></span> 
  
   </h3>
 
        <p> Hello! I'm a budding MERN stack developer driven by a passion for crafting sleek and user-friendly web solutions. While I'm new to the field, my dedication to learning and creativity fuels my ambition to create dynamic and scalable applications that exceed expectations. Let's turn ideas into reality together!.</p>

        <div className='social-icons'>
            <a href="#"><i className='bx bxl-linkedin' ></i></a>
            <a href="#"><i className='bx bxl-github' ></i></a>
            <a href="#"><i className='bx bxl-instagram-alt' ></i></a>
            
        </div>
        <div className='btn-group'>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ckanandu@gmail.com" className='btn'>Hire</a>

            <a href="#contact" className='btn'>Contact</a>
        </div>
      </div>
    <div className="home-img">

    </div>

    </section>
    </>
  );
  
}

export default Myhome;
