// import React from 'react';
// import TypewriterAnimation from './TypewritterAnimation';


// function Myhome() {
//   return (
//     <>
    
//     <section className="home" id="home">
//       <div className="home-content ">
//         <h1 className='md:text-6xl text-5xl lg:text-8xl'>Hi, It's <span>Anandan</span></h1>
//         <h3 className=" "> 
//              <TypewriterAnimation/>
  
//    </h3>
 
//         <p  > Hello! I'm a budding MERN stack developer driven by a passion for crafting sleek and user-friendly web solutions. While I'm new to the field, my dedication to learning and creativity fuels my ambition to create dynamic and scalable applications that exceed expectations. Let's turn ideas into reality together!.</p>

//         <div className='social-icons'>
//             <a href="#"><i className='bx bxl-linkedin' ></i></a>
//             <a href="#"><i className='bx bxl-github' ></i></a>
//             <a href="#"><i className='bx bxl-instagram-alt' ></i></a>
            
//         </div>
//         <div className='btn-group'>
//         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ckanandu@gmail.com" className='btn text-2xl'>Download CV</a>

//             <a href="#contact" className='btn text-2xl'>Contact</a>
//         </div>
//       </div>
//     <div className="home-img">

//     </div>

//     </section>
//     </>
//   );
  
// }

// export default Myhome;
import React from 'react';
import TypewriterAnimation from './TypewritterAnimation';
import AnandanCV from '../Components/files/Anandan_CV.pdf';


function Myhome() {
  const downloadCV = () => {
    // Use the imported CV file path to initiate the download
    const link = document.createElement('a');
    link.href = AnandanCV;
    link.download = 'Anandan_CV.pdf';
    link.click();
  };

  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1 className='md:text-6xl text-5xl lg:text-8xl'>Hi, It's <span>Anandan</span></h1>
          <h3>
            <TypewriterAnimation />
          </h3>
          <p>
            Hello! I'm a budding MERN stack developer driven by a passion for crafting sleek and user-friendly web solutions. While I'm new to the field, my dedication to learning and creativity fuels my ambition to create dynamic and scalable applications that exceed expectations. Let's turn ideas into reality together!
          </p>
          <div className='social-icons'>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
          </div>
          <div className='btn-group'>
            <button onClick={downloadCV} className='btn text-2xl'>Download CV</button>
            <a href="#contact" className='btn text-2xl'>Contact</a>
          </div>
        </div>
        <div className="home-img"></div>
      </section>
    </>
  );
}

export default Myhome;
