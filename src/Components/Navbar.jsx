import React, { useEffect, useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navLinks = document.querySelectorAll('header nav a');

      navLinks.forEach((link) => {
        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        if (section) {
          const offset = section.offsetTop;
          const height = section.offsetHeight;

          // Calculate section boundaries based on scroll position
          const sectionTop = offset - 100; // Adjust 100 to fit your layout
          const sectionBottom = offset + height - 100; // Adjust 100 to fit your layout

          // Check if scroll position is within the section boundaries
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            setActiveLink(`#${id}`);
          }
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="#home" className="logo text-4xl md:text-5xl">
        Ananda <span>Krishnan</span>
      </a>

      <i
        className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" className={activeLink === "#home" ? "active" : ""}>
          Home
        </a>
        <a href="#education" className={activeLink === "#education" ? "active" : ""}>
          Education
        </a>
        <a href="#skills" className={activeLink === "#skills" ? "active" : ""}>
          Skills
        </a>
        <a href="#projects" className={activeLink === "#projects" ? "active" : ""}>
          Projects
        </a>
        <a href="#contact" className={activeLink === "#contact" ? "active" : ""}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
