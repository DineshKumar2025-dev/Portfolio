import React from "react";
import "@fontsource/saira-stencil-one";
import { useState,useEffect } from "react";
import { Collapse } from "bootstrap";
function RolesAnimation() {
  const roles = ["UI/UX Developer", "Python Developer", "Database Expert", "Data Analyst","WEB DEVELOPER","PEGA SYSTEM ARCHITECT"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      // When typing finished
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // When deleting finished
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <span className="typing-text">
      {text}
      <span className="cursor">|</span>
    </span>
  );
}


function Navbar(){
    const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Home",
        "about",
        "resume-section",
        "projects",
        "contact-section"
      ];

      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(
        <>
            <nav className="navbar navbar-expand-lg position-fixed top-0 w-100 shadow">
                <div className="container">
                    <a className="navbar-brand text-decoration-none fs-2" href="#">Dinesh Kumar</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" data-bs-parent="">
                         <ul className="navbar-nav gap-5 mb-2 mb-lg-0 d-flex ms-auto">
        
                          <li className="nav-item">
                            <a className={`nav-link ${activeSection === "Home" ? "active" : ""}`} href="#Home">
                              Home
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className={`nav-link ${activeSection === "about" ? "active" : ""}`} href="#about">
                              About
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className={`nav-link ${activeSection === "resume-section" ? "active" : ""}`} href="#resume-section">
                              Resume
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className={`nav-link ${activeSection === "projects" ? "active" : ""}`} href="#projects">
                              Project
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className={`nav-link ${activeSection === "contact-section" ? "active" : ""}`} href="#contact-section">
                              Contact
                            </a>
                          </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <section className="container d-flex" id="Home">
                <div className="row">
                <div className="col-12 col-lg-6 box">
                    <p className="secondary-text">HELLO !</p>
                    <h2 className="fs-1"><span className="primary-text">I'M </span><span className="secondary-text"> Dinesh Kumar</span></h2>
                    <div>
                        <span className="primary-text mt-2 fs-3"><RolesAnimation/></span>
                    </div>
                    <p style={{color: "rgb(158 158 158)" }}>
                        Hi. My name is Dinesh, a software developer with a Passion for Developing Creative Applications. I have experience with both frontend & backend technologies. I also have an eye for UI/UX design.
                    </p>
                    <div>
                        <a href="Attachments/Dharmavarapu_Dinesh_kumar.pdf" target="_blank" rel="noopener noreferrer"className="btn resume fw-bold">  View Resume</a>
                    </div>
                </div>
                <div className="col-d-none col-lg-6 box">
                  <div className="image-wrapper d-flex justify-content-center">
                    <img 
                      src="Attachments/images/laptop.png" 
                      alt="animate" 
                      className="animate-img"
                    />
                  </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Navbar